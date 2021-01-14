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

const mongooseData = () => {
  mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("MongoDB连接成功！")
    }
  });//连接数据库
}

export default mongooseData;