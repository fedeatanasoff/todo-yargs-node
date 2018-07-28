const { argv } = require("./config/yargs");
const { crearTarea, listadoTarea } = require("./todo/todo");
const colors = require("colors");

let comando = argv._[0];
switch (comando) {
  case "crear":
    let tarea = crearTarea(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    let tareas = listadoTarea();
    console.log("=============================".green);
    console.log("===== Listado de Tareas =====".green.bold);
    console.log("=============================".green);

    for (let tarea of tareas) {
      console.log(`Tarea: ${tarea.descripcion} - Estado: ${tarea.completado}`);
    }

    //console.log(listadoTarea());
    break;
  case "actualizar":
    console.log("actualiza una tarea");
    break;
  default:
    console.log("Comando no reconocido");
}
