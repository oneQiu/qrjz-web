const path = require("path");
const htmlWebpckPlugin = require("html-webpack-plugin");
const progressBarWebpackPlugin = require("progress-bar-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack配置
module.exports = {
	// 开发模式
	mode: "development",
	// 入口
	entry: path.join(__dirname, "../src/index.tsx"),
	// 出口
	output: {
		path: path.resolve(__dirname, "../dist/"),
		filename: "[hash].bundle.js",
	},
	module: {
		// 通常用来加载资源
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: path.join(__dirname, "../node_modules/"),
			},
			{
				// 处理ts tsx
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
				exclude: path.join(__dirname, "../node_modules/"),
			},
			{
				// 加载其他文件
				test: /\.[(png)|(obj)|(json)]$/,
				loader: "file-loader",
			},
			{
				test: /\.[(css)|(less)]$/,
				loader: ["css-loader", "style-loader", "less-loader"],
			},
		],
	},
	// 增强功能
	plugins: [
		// 打包进度条
		new progressBarWebpackPlugin(),
		// 清除之前的打包文件
		new CleanWebpackPlugin(),
		// 获取模板html
		new htmlWebpckPlugin({
			template: path.join(__dirname, "../public/index.html"),
		}),
	],
	// 调试工具
	devtool: "source-map",
	// 解析
	resolve: {
		// 配置别名
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
		// 省略后缀 使用TS必须开 需要加 .
		extensions: [".ts", ".tsx", ".js"],
	},
};
