import { PageRank } from '../../db/models/PageRankModel';
import { Create } from '../utils';
import { crawlerPostFun } from '../utils/crawler';

const baseUrl = "https://backsite.hubing.online/Monitor/PageRankStatis"

const params = {
  "TimeQuantum": 4,
  "appKey": "5ea9a55e5b0dd76c634bed78",
  "eTime": "",
  "keywords": "",
  "pageIndex": 1,
  "pageSize": 50,
  "sTime": ""
}

const test = (value) => {
  console.log('----value', value)
  if (value) {
    const rows = value.Data.pageStatis || [];
    const {total,totalCount} = value.Data;
    rows.forEach((e, index) => {
      Create(PageRank, {
        count: e.count,
        page: e.page,
      }, (a) => {
        console.log('-----a', a);
      }
      )
    })
  }
}


export const PageRankCrawlerFn = crawlerPostFun(baseUrl, "POST", params, test);