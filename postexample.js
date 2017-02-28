//var express =require("express");
//var app=express();
//var bodyParser = require('body-parser');
//var urlencodedParser=bodyParser
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs=require('fs');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/home', function (req, res) {
   res.sendFile( __dirname + "/rw/" + "postexample.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

   // 输出 JSON 格式
 var  response = {
       first_name:req.body.name,
       password:req.body.pass1,
	   password2:req.body.pass2,
       phoneNum:req.body.phone,
		   Email:req.body.email,
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
fs.writeFile('info.json',response,function(err){  
        if(err) throw err;  
        console.log('write JSON into TEXT');  
    });  

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})