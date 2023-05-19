module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "main_pack.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
