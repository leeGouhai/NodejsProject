//把路由封装成模块

const express = require("express");

let Router = express.Router();

Router.get("/",(req,res)=>{
    res.send("user list");
});
Router.route("/:uid")
    .get((req,res)=>{
        res.send({
            type:"get",
            msg:"获取用户信息",
            uid:req.params.uid
        });
    })
    .post((req,res)=>{
        res.send({
            type:"post",
            msg:"修改用户信息",
            uid:req.params.uid
        });
    })
    .put((req,res)=>{
        res.send({
            type:"put",
            msg:"增加用户信息",
            uid:req.params.uid
        });
    })
    .delete((req,res)=>{
        res.send({
            type:"delete",
            msg:"删除用户信息",
            uid:req.params.uid
        });
    }) 


module.exports = Router;