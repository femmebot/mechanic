module.exports = (getCommandHandler) => ({
  command: "build [configPath] [functionsPath] [distDir]",
  aliases: ["b"],
  desc: "Builds local project",
  builder: (yargs) =>
    yargs
      .options({
        configPath: {
          type: "string",
          description: "Path to mechanic config file",
        },
        functionsPath: {
          type: "string",
          description: "Path to directory containing design functions",
        },
        distDir: {
          type: "string",
          description: "Custom build directory",
        },
      })
      .default("configPath", "./mechanic.config.js")
      .default("functionsPath", "./functions")
      .default("distDir", "./dist"),
  handler: getCommandHandler("build"),
});
