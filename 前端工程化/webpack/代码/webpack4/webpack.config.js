const path = require("path")
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap:true,
              plugins: (loader) => {
                require("autoprefixer")
              },
            },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
}
