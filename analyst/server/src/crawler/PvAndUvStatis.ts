/*
 * @Author: your name
 * @Date: 2021-01-16 09:56:59
 * @LastEditTime: 2021-01-16 16:22:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/src/crawler/PvAndUvStatis.ts
 */
import { PvAndUv } from '../../db/models/PvAndUvModel';
import { Create } from '../utils';
import { crawlerPostFun } from '../utils/crawler';

const baseUrl = "https://backsite.hubing.online/Monitor/PvAndUvStatis"

const params = {
  "TimeQuantum": 6,
  "appKey": "5ea9a55e5b0dd76c634bed78",
  "eTime": "",
  // "keywords": "http://www.bca335.com/#/",
  "sTime": ""
}

const test = (params, value) => {
  const { TimeQuantum } = params
  console.log('----value', value)
  if (value) {
    const rows = value.Data.pvAndUvVmList || [];
    console.log('---reows', rows);

    rows.forEach((e, index) => {
      Create(PvAndUv, {
        pv: e.pv,
        uv: e.uv,
        createTime: e.createTime,
        TimeQuantum: TimeQuantum
      }, (a) => {
        console.log('-----a', a);
      }
      )
    })
  }
}


export const PvAndUvCrawlerFn = crawlerPostFun(baseUrl, "POST", params, test);