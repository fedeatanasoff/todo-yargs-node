const opt = {
  descripcion: {
    demand: true,
    alias: "d",
    desc: "descripcion de la tarea por realizar"
  }
};

const argv = require("yargs")
  .command("crear", "Crea una tarea por hacer", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "descripcion de la tarea por realizar"
    }
  })
  .command("actualizar", "Actualiza el estado completado de una tarea", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "descripcion de la tarea por realizar"
    },
    completado: {
      default: true,
      alias: "c",
      desc: "marca como cpletado la tarea"
    }
  })
  .help().argv;

module.exports = {
  argv: argv
};
