const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
const path = require("path");

// webpack配置
module.exports = merge(baseConfig, {
	mode: "production",
	module: {
		rules: [],
	},
	plugins: [],
	resolve: {},
	devServer: {
		quiet: true,
	},
});
