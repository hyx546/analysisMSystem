// @ts-ignore
const mongoose = require('mongoose');
const Schema = mongoose.Schema

// 创建schema
// @ts-ignore
export const BrowserSchema = new Schema({
  bs:String,
  count:Number,
  TimeQuantum:Number
})
