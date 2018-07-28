const { argv } = require("./config/yargs");
const colors = require("colors");

let comando = argv._[0];
switch (comando) {
  case "crear":
    console.log("crear tarea");
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
