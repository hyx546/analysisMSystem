/*
 * @Author: your name
 * @Date: 2021-01-16 16:37:04
 * @LastEditTime: 2021-01-16 16:37:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/db/schemas/JsErrorRateSchema.ts
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
export const JsErrorRateSchema = new Schema({
  rate: Number,
})
