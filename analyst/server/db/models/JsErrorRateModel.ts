/*
 * @Author: your name
 * @Date: 2020-11-11 20:27:36
 * @LastEditTime: 2021-01-16 16:38:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/db/models/UserModel.ts
 */
import { JsErrorRateSchema } from '../schemas/JsErrorRateSchema';

const mongoose = require('mongoose');

//创建model，这个地方的user对应mongodb数据库中users的conllection。
export const JsErrorRate = mongoose.model('jsErrorRate', JsErrorRateSchema);
