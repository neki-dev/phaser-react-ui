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
    phaser: "/node_modules/phaser",
    react: "/node_modules/react",
    "react-dom": "/node_modules/react-dom",
    "react-dom/client": "/node_modules/react-dom/client",
  },
};
