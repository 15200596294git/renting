// 引入express中间件
const express = require("express");
//引入连接池模块
const pool = require("./pool");
// 创建路由器
var router = express.Router();
// 导出路由对象
module.exports = router;