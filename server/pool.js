// 引入mysql
const mysql = require("mysql");
// 创建连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  database:"rent",
  connectionLimit:15
});
// 导出连接池
module.exports = pool;