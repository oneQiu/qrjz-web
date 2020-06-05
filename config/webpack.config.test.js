const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");

// webpack配置
module.exports = merge(baseConfig, {
  mode: "production",
  module: {
    rules: [],
  },
  plugins: [],
  resolve: {
    alias: {},
  },
  devServer: {
    quiet: true,
    contentBase: "./dist",
    hot: true,
    inline: true,
    quiet: true,
  },
});
