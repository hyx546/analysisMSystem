import { Browser } from '../../db/models/BrowserModel';
import { Create } from '../utils';
import { crawlerPostFun } from '../utils/crawler';

const baseUrl = "https://backsite.hubing.online/Monitor/BrowserStatis"

const params = {
  "TimeQuantum": 5, // 123456
  "appKey": "5ea9a55e5b0dd76c634bed78",
}

const test = (params, value) => {
  const { TimeQuantum } = params
  console.log('----paarams', params);
  console.log('----value', value)
  if (value) {
    const rows = value.Data || [];
    rows.forEach((e, index) => {
      Create(Browser, {
        bs: e.bs,
        count: e.count,
        TimeQuantum: TimeQuantum,
      }, (value) => { })
    })
  }
}


export const BrowserCrawlerFn = crawlerPostFun(baseUrl, "POST", params, test);