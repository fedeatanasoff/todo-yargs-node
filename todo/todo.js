const fs = require("fs");

let todo = [];

const guardarDB = () => {
  let data = JSON.stringify(todo);

  fs.writeFile("db/data.json", data, err => {
    if (err) throw new Error("la tarea no se pudo salvar", err);

    console.log("se ha actualizado la DB");
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
    console.log("no se ha encontrado una tarea con esa descripcion");
    return false;
  }
};

let borrarTarea = descripcion => {
  cargarDB();

  let indice = todo.findIndex(tarea => {
    return tarea.descripcion === descripcion;
  });

  if (indice >= 0) {
    todo.splice(indice, 1);
    guardarDB();
    return true;
  } else {
    console.log("no existe una tarea con ese nombre");
    return false;
  }
};

module.exports = {
  crearTarea: crearTarea,
  listadoTarea: listadoTarea,
  borrarTarea: borrarTarea,
  actualizarTarea: actualizarTarea
};
