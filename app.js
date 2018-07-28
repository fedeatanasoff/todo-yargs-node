const { argv } = require("./config/yargs");
const { crearTarea } = require("./todo/todo");
const colors = require("colors");

let comando = argv._[0];
switch (comando) {
  case "crear":
    let tarea = crearTarea(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    console.log("muestra todas las tareas");
    break;
  case "actualizar":
    console.log("actualiza una tarea");
    break;
  default:
    console.log("Comando no reconocido");
}
