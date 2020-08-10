//0. 安装
//1. 引包

var express = require('express');
var fs = require('fs')
var router = require('./router')
var bodyParser = require('body-parser')


//const dbPath = './db.json'

//2. 创建你的服务器应用程序
//也就是原来的http.createServer
var app = express()

//公开指定目录
//只要这样就可以直接通过/public/xx的方式访问public目录的所有资源
//app.use(express.static('./views'))
app.use('/public/', express.static('./public/'))

//配置使用art-template
app.engine('html', require('express-art-template'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.use(router)

//Express 为 Response 响应对象提供一个方法：render
// app.get('/', function(req, res) {
//     res.render('index.html')
// })

// //当服务器收到get请求/的时候，执行回调处理函数
// app.get('/list', function(req, res) {
//     fs.readFile('./db.json', 'utf8', function(err, data) {
//         if (err) {
//             return res.status(500).send('Server error.')
//         }
//         //users: JSON.parse(data).users
//         res.render('list.html', {
//             users: JSON.parse(data).users
//         })
//     })
// })

//当以post请求/post的时候，执行指定的处理函数
//app.post('/post', function(req, res) {
//console.log('收到表单post 请求了')
//res.render('post')
//})

//相当于server.listen
app.listen(4000, function() {
    console.log('express app is running at port 3000')
})

module.exports = app