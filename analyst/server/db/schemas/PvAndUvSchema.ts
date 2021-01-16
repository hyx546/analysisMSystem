/*
 * @Author: your name
 * @Date: 2020-11-11 20:27:36
 * @LastEditTime: 2021-01-16 15:46:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/db/schemas/UserSchema.ts
 */
// @ts-ignore
const mongoose = require('mongoose');
const Schema = mongoose.Schema

// 创建schema
// @ts-ignore
export const PvAndUvSchema = new Schema({
  pv: Number,
  uv: Number,
  createTime:String,
  TimeQuantum:Number
})
