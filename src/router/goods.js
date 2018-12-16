//把路由封装成模块

const express = require("express");

let Router = express.Router();

Router.get("/",(req,res)=>{
    res.send("goods list");
});

// Router.get("/:gid",(req,res)=>{
//     res.send({
//         path:req.url,
//         gid:req.params.gid
//     });
// });
Router.route("/:gid")
    .get((req,res)=>{
        res.send({
            type:"get",
            msg:"获取商品信息",
            gid:req.params.gid
        });
    })
    .post((req,res)=>{
        res.send({
            type:"post",
            msg:"修改商品信息",
            gid:req.params.gid
        });
    })
    .put((req,res)=>{
        res.send({
            type:"put",
            msg:"增加商品信息",
            gid:req.params.gid
        });
    })
    .delete((req,res)=>{
        res.send({
            type:"delete",
            msg:"删除商品信息",
            gid:req.params.gid
        });
    }) 

module.exports = Router;