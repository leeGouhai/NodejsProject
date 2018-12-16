//把路由封装成模块

const express = require("express");

let Router = express.Router();

const userRouter = require("./user");
const goodsRouter = require("./goods");

//当前端的请求在server.js的静态资源服务器查询不到时,会用到Router中间件,继而到index.js文件执行
Router.use("/user",userRouter);
Router.use("/goods",goodsRouter);

module.exports = Router;