const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: "./pages/index.vue",
  resolve: {
    extensions: [
      ".ts", ".tsx", ".js", ".vue",
    ],
  },
  module: {
    rules: [
      {
        test: /\.vue|ts|tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ],
};
