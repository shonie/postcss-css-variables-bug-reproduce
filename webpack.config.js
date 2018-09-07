const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist/")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: require("./postcss.config")
            }
          }
        ]
      }
    ]
  }
};
