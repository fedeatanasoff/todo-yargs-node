const fs = require("fs");

let todo = [];

const guardarDB = () => {
  let data = JSON.stringify(todo);

  fs.writeFile("db/data.json", data, err => {
    if (err) throw new Error("la tarea no se pudo salvar", err);

    console.log("La tarea ha sido guardada");
  });
};

let crearTarea = descripcion => {
  let tarea = {
    descripcion: descripcion,
    completado: false
  };

  todo.push(tarea);

  guardarDB();

  return tarea;
};

module.exports = {
  crearTarea: crearTarea
};
