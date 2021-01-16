/*
 * @Author: your name
 * @Date: 2021-01-16 12:24:02
 * @LastEditTime: 2021-01-16 15:41:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/src/crawler/PageTopStatis.ts
 */
import { PageTop } from '../../db/models/PageTopModel';
import { Create } from '../utils';
import { crawlerPostFun } from '../utils/crawler';

const baseUrl = "https://backsite.hubing.online/Monitor/PageTopStatis"

const params = {
  "TimeQuantum": 0, //0123456
  "appKey": "5ea9a55e5b0dd76c634bed78",
  "eTime": "",
  "sTime": "",
  "top": 8
}

const test = (params, value) => {
  const { TimeQuantum } = params
  console.log('----params', params);
  console.log('----value', value)
  if (value) {
    const rows = value.Data|| [];
    rows.forEach((e, index) => {
      Create(PageTop, {
        count: e.count,
        page: e.page,
        TimeQuantum: TimeQuantum,
      }, (a) => {
        console.log('-----a', a);
      })
    })
  }
}


export const PageTopCrawlerFn = crawlerPostFun(baseUrl, "POST", params, test);