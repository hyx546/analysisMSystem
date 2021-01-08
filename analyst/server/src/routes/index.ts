/*
 * @Author: your name
 * @Date: 2021-01-08 20:36:16
 * @LastEditTime: 2021-01-08 20:43:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/src/routes/index.ts
 */
import { User } from '../../db/models/UserModel'; // 引入模型

const express = require('express');


// 注册路由
export const router = express.Router();

// 路由中间件
router.use((req: any, res: any, next: any) => {
  // 任何路由信息都会执行这里面的语句
  console.log('this is a api request!');
  // 把它交给下一个中间件，注意中间件的注册顺序是按序执行
  next();
})

// 获取用户列表信息的路由
router.post('/login', (req: any, res: any) => {
  console.log('-----req',req.body);
  const postData = {
    username:req.body.username,
    password:req.body.password
  };
  console.log('----User',User);
  
  User.findOne({
    username:postData.username,
    password:postData.password
  },(err,data) => {
    console.log('----data',data);
    
    if(err) throw err;
    if(data) {
      res.send('postData')
    }else{
      res.send('账号或密码错误')
    }
  })
});