/*
 * @Author: your name
 * @Date: 2021-01-08 20:36:16
 * @LastEditTime: 2021-01-16 15:41:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/src/routes/index.ts
 */
import { PageTop } from '../../db/models/PageTopModel';
import { User } from '../../db/models/UserModel'; // 引入模型
import { PageTopCrawlerFn } from '../crawler/PageTopStatis';
import { Create, Find, FindAll } from '../utils';

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
  const { name, password } = req.body
  Find(User, {
    name: name,
    password: password
  }, (data) => {
    res.send(data)
  })
});

// 用户注册
router.post('/register', (req: any, res: any) => {
  const { name, password, email, real_name } = req.body
  Find(User, {
    name: name,
    password: password
  }, (data) => {
    // 该用户存在
    if (data) {
      const req = {
        msg: '该用户已经存在',
        error: '34001'
      }
      res.send(req);
    } else {
      Create(User, {
        name: name,
        password: password,
        email: email,
        real_name: real_name
      }, (data) => {
        res.send(data)
      })
    }
  })
})

//PageTopStatis

router.post('/PageTopStatis', (req: any, res: any) => {
  console.log('-----req.body', req.body);
  const { TimeQuantum } = req.body
  FindAll(PageTop, {
    TimeQuantum: TimeQuantum,
  }, (data) => {
    console.log('-----data', data);
    if(data){
      res.send(data)
    }
  })
})