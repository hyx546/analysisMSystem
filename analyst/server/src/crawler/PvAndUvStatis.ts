import { PvAndUv } from '../../db/models/PvAndUvModel';
import { Create } from '../utils';
import { crawlerPostFun } from '../utils/crawler';

const baseUrl = "https://backsite.hubing.online/Monitor/PvAndUvStatis"

const params = {
  "TimeQuantum": 4,
  "appKey": "5ea9a55e5b0dd76c634bed78",
  "eTime": "",
  "keywords": "http://www.bca335.com/#/",
  "sTime": ""
}

const test = (value) => {
  console.log('----value', value)
  if (value) {
    const rows = value.Data.pvAndUvVmList || [];
    rows.forEach((e, index) => {
      Create(PvAndUv, {
        pc: e.pv,
        uv: e.uv,
        createTime:e.createTime
      }, (a) => {
        console.log('-----a', a);
      }
      )
    })
  }
}


export const PvAndUvCrawlerFn = crawlerPostFun(baseUrl, "POST", params, test);