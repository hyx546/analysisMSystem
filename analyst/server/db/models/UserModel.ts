/*
 * @Author: your name
 * @Date: 2020-11-11 20:27:36
 * @LastEditTime: 2021-01-08 19:57:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/db/models/UserModel.ts
 */
import { UserSchema } from '../schemas/UserSchema';
const mongoose = require('mongoose');
// const UserSchema = require('../schemas/UserSchema')


//创建model，这个地方的user对应mongodb数据库中users的conllection。
export const User = mongoose.model('users', UserSchema);
