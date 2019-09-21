// 引入第三方模块 express
const express = require("express");
// 引入body-parset中间件
const bodyParser = require("body-parser");
// 跨域
const cors = require("cors");
// 创建服务器
var server = express();
// 引入路由
const useRouter = require("./router");
// 不使用第三方qs模块
server.use(bodyParser.urlencoded({
  extended:false
}));
// 配置跨域
server.use(cors({
  origin:["http://127.0.0.1:8080","http://127.0.0.1:5500",]
}));
// 设置静态目录托管
server.use(express.static("public"));
// 启动监听
server.listen(5050);