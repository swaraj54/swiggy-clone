module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' },
      {
        test: /\.scss$/,
        include: paths.appSrc,
        loaders: ["style", "css", "sass"]
      },
    ],
  },
};