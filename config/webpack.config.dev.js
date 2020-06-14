const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");

// webpack配置
module.exports = merge(baseConfig, {
	module: {
		rules: [],
	},
	plugins: [],
	resolve: {},
	devtool: "eval-source-map",
	// 开发模式下的服务配置
	devServer: {
		contentBase: "./dist",
		hot: true,
		inline: true,
		port: 8888,
		open: true,
		proxy: {
			"/api": {
				target: "http:127.0.0.1:1803",
			},
		},
	},
});
