// @ts-ignore
const mongoose = require('mongoose');
const Schema = mongoose.Schema

// 创建schema
// @ts-ignore
export const PageWhSchema = new Schema({
  pageWh:String,
  count:Number,
  TimeQuantum:Number
})
