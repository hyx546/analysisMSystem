/*
 * @Author: your name
 * @Date: 2021-01-16 16:41:54
 * @LastEditTime: 2021-01-16 16:42:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/db/schemas/GeoSchema.ts
 */
/*
 * @Author: your name
 * @Date: 2020-11-11 20:27:36
 * @LastEditTime: 2021-01-08 19:57:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/db/schemas/UserSchema.ts
 */
// @ts-ignore
const mongoose = require('mongoose');
const Schema = mongoose.Schema

// 创建schema
// @ts-ignore
export const GeoSchema = new Schema({
  pv: Number,
  uv: Number,
  TimeQuantum:Number,
  provice:String
})
