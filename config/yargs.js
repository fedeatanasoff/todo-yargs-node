const descripcion = {
  demand: true,
  alias: "d",
  desc: "descripcion de la tarea por realizar"
};

const completado = {
  default: true,
  alias: "c",
  desc: "marca como cpletado la tarea"
};

const argv = require("yargs")
  .command("crear", "Crea una tarea por hacer", {
    descripcion
  })
  .command("actualizar", "Actualiza el estado completado de una tarea", {
    descripcion,
    completado
  })
  .command("borrar", "elimina una tarea", {
    descripcion
  })
  .help().argv;

module.exports = {
  argv: argv
};
