import { PvAndUvSchema } from '../schemas/PvAndUvSchema';

const mongoose = require('mongoose');

//创建model，这个地方的user对应mongodb数据库中users的conllection。
export const PvAndUv = mongoose.model('pvAnduv', PvAndUvSchema);
