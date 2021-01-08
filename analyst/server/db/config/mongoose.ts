/*
 * @Author: your name
 * @Date: 2020-11-11 20:27:36
 * @LastEditTime: 2021-01-08 20:00:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/db/config/mongoose.ts
 */
// 用于连接数据库并且定义schema和model
const mongoose = require('mongoose');
const config = require('./config');

const mongooseData​​ = () => {
  mongoose.connect(config.mongodb);//连接数据库
  // 实例化连接对象
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, '连接错误：'));
  db.once('open', (callback) => {
    console.log('MongoDB连接成功！');
  })
  return db;
}

export default mongooseData​​;