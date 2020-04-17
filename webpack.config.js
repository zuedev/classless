const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },
  // TODO: pull from compilable CSS instead (SCSS?)
  plugins: [new CopyPlugin([{ from: "src/main.css", to: "main.css" }])],
};
