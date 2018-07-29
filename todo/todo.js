const fs = require("fs");

let todo = [];

const guardarDB = () => {
  let data = JSON.stringify(todo);

  fs.writeFile("db/data.json", data, err => {
    if (err) throw new Error("la tarea no se pudo salvar", err);

    console.log("La tarea ha sido guardada");
  });
};

const cargarDB = () => {
  try {
    todo = require("../db/data.json");
  } catch (error) {
    todo = [];
  }
};

let listadoTarea = () => {
  cargarDB();
  return todo;
};

let crearTarea = descripcion => {
  cargarDB();

  let tarea = {
    descripcion: descripcion,
    completado: false
  };

  todo.push(tarea);

  guardarDB();

  return tarea;
};

let actualizarTarea = (descripcion, completado) => {
  cargarDB();

  let indice = todo.findIndex(tarea => {
    return tarea.descripcion === descripcion;
  });

  if (indice >= 0) {
    todo[indice].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crearTarea: crearTarea,
  listadoTarea: listadoTarea,
  actualizarTarea: actualizarTarea
};
