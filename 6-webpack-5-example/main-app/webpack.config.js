const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  output: {
    publicPath: "http://localhost:8000/",
  },

  resolve: {
    extensions: [".vue", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8000,
    proxy: {
      "/common-lib": {
        target: "http://localhost:3000/",
        pathRewrite: { "^/common-lib": "" },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "home",
      remotes: {
        helloWorld: "helloWorld@http://localhost:8080/remoteEntry.js",
      },
      exposes: {},
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
