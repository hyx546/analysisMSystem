/*
 * @Author: your name
 * @Date: 2021-01-16 16:44:17
 * @LastEditTime: 2021-01-16 16:46:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/server/src/crawler/GeoStatis.ts
 */
import { Geo } from '../../db/models/GeoModel';
import { Create } from '../utils';
import { crawlerPostFun } from '../utils/crawler';

const baseUrl = "https://backsite.hubing.online/Monitor/GeoStatis"

const params = {
  "TimeQuantum": 6, // 123456
  "appKey": "5ea9a55e5b0dd76c634bed78",
}

const test = (params, value) => {
  const { TimeQuantum } = params
  console.log('----params', params);
  console.log('----value', value)
  if (value) {
    const rows = value.Data || [];
    rows.forEach((e, index) => {
      Create(Geo, {
        pv: e.pv,
        uv: e.uv,
        provice:e.provice,
        TimeQuantum: TimeQuantum,
      }, (value) => { })
    })
  }
}


export const GeoCrawlerFn = crawlerPostFun(baseUrl, "POST", params, test);