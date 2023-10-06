const path = require("path");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  entry: [path.resolve(__dirname, "src/index.ts")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  externals: {
    phaser: "phaser",
    react: "react",
    "react-dom": "react-dom",
    "react-dom/client": "react-dom/client",
  },
};
