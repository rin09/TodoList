module.exports={
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    path: __dirname+"/dist",
    filename: "index.js"
  },
  module: {
    rules: [
      {
        resource: {
          test: /\.jsx?$/,
          exclude: /node_modules/
        },
        use: ["babel-loader"]
      }
    ]
  }
}