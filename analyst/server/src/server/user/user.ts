/*
 * @Author: your name
 * @Date: 2020-12-21 20:40:51
 * @LastEditTime: 2021-01-08 20:33:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/src/server/user/user.module.ts
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:{
    type:String,
    unique:true
  },
  password:{
    type:String,
  },
  age:Number,
  address:String
})

const Users = mongoose.model('users',userSchema)

export default Users;