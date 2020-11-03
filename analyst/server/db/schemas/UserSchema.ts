const mongoose = require('mongoose');
const Schema = mongoose.Schema

// 创建schema
const UserSchema = new Schema({
  id:ID,
  name:String,
  password:String,
  email:String
})

module.exports = UserSchema;