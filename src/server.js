//nodejs模块化开发
//基于配置的开发

const express = require("express");
const Router = require("./router/index");

//引入配置文件
const {port,host,root} = require("./config");

let app = express();

//利用中间件创建静态资源服务器
app.use("/",express.static(root));

/**当前端的请求在server.js的静态资源服务器查询不到时,
 * 会用到Router中间件,继而到index.js文件执行 
 * */

//把路由分开
app.use(Router);

app.listen(port,()=>{
    console.log(`server is running on http://${host}:${port}`);
});