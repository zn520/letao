var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'letao'
});
connection.connect();

//用户登录
router.post("/login", (req, res) => {
  var phone = req.body.phone;
  var upwd = req.body.upwd;
  console.log(phone + "...." + upwd);
  var sql = "select * from letao_user where phone = ? and upwd = md5(?)"
  connection.query(sql, [phone, upwd], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      console.log(result);
      res.send({ code: 200, msg: 'login success' });
    } else {
      res.send({ code: 301, msg: 'login error' });
    }
  })
});
//用户注册

//导出路由
module.exports = router;