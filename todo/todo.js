let todo = [];

let crearTarea = descripcion => {
  let tarea = {
    descripcion: descripcion,
    completado: false
  };

  todo.push(tarea);

  return tarea;
};

module.exports = {
  crearTarea: crearTarea
};
