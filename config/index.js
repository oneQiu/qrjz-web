const WebpackDev = require("./webpack.config.dev");
const WebpackProd = require("./webpack.config.prod");
const WebpackTest = require("./webpack.config.test");

// 定义模式
const modeMap = {
  dev: WebpackDev,
  test: WebpackTest,
  prod: WebpackProd,
};

// process.env.npm_lifecycle_event npm 生命周期事件
// process.argv 返回命令数组 这是sciprts根据空格截断的
// console.log(process.argv);
// webpack通常暴露对象，如果是函数，接收两个参数

/**
 * @param {Object} env 传入的自定义参数
 * @param {Object} argv webpack环境
 */
module.exports = ({ mode }) => {
  return modeMap[mode] || modeMap.dev;
};
