const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  publicPath: "http://localhost:8080/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "helloWorld",
        filename: "remoteEntry.js",
        exposes: {
          "./main": "./src/main.js",
        },
      }),
    ],
  },
};
