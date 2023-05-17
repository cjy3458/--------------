module.exports = {
  entry: "./script.js",
  output: {
    path: __dirname,
    filename: "build.js",
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
  devServer: {
    before: function (app, server, compiler) {
      app.use("/api", function (req, res) {
        const targetURL =
          "http://ll11th-toy-project.p-e.kr:8000" + req.originalUrl;
        req.pipe(request(targetURL)).pipe(res);
      });
    },
  },
};
