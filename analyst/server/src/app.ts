/*
 * @Author: your name
 * @Date: 2020-11-11 20:27:36
 * @LastEditTime: 2021-01-11 20:32:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/src/server.ts
 */
import mongooseData from '../db/config/mongoose';
import { router } from './routes';

const express = require('express');
const bodyParser = require('body-parser');

mongooseData();

const app = express();
// 给app配置bodyParser中间件
// 通过如下配置再路由种处理request时，可以直接获得post请求的body部分
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('*', function (req, res, next) {
  console.log('node server is listening');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

// 所有的路由会加上“／api”前缀
app.use('/api', router); //添加router中间件

// express 自动帮我们创建一个server，封装的node底层http
app.listen(3003, () => {
  console.log('node server is listening 3003');
});
