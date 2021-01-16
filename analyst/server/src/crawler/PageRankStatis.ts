import { PageRank } from '../../db/models/PageRankModel';
import { Create } from '../utils';
import { crawlerPostFun } from '../utils/crawler';

const baseUrl = "https://backsite.hubing.online/Monitor/PageRankStatis"

const params = {
  "TimeQuantum": 1, // 123456
  "appKey": "5ea9a55e5b0dd76c634bed78",
  "eTime": "",
  "keywords": "",
  "pageIndex": 1,
  "pageSize": 50,
  "sTime": ""
}

const test = (params, value) => {
  const { TimeQuantum } = params
  console.log('----params', params);
  console.log('----value', value)
  if (value) {
    const rows = value.Data.pageStatis || [];
    rows.forEach((e, index) => {
      Create(PageRank, {
        count: e.count,
        page: e.page,
        TimeQuantum: TimeQuantum,
      }, (value) => { })
    })
  }
}


export const PageRankCrawlerFn = crawlerPostFun(baseUrl, "POST", params, test);