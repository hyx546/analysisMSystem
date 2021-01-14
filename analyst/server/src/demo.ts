import { Test } from "../db/models/TestModel";
import { Create } from "./utils";

import mongooseData from '../db/config/mongoose';

mongooseData()
const request = require("request");//request请求库
let data = [] // 把这个数组写入excel   
request({
  url: "https://backsite.hubing.online/Monitor/PageTopStatis",//你要请求的地址
  method: "POST",//请求方法 post get
  json: true,
  headers: {
    "content-type": "application/json,text/plain",
    // "Accept-Encoding": "gzip, deflate, br",
    // "Accept": "*/*",
    // "Cookie": "",// 如果携带了cookie
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Headers": "*"
  },
  body: JSON.stringify({
    TimeQuantum: 4,
    appKey: '5ea9a55e5b0dd76c634bed78',
    eTime: '',
    sTime: '',
    top: 8
  }),//这里是post 传的参数 如果是get 方法在url上拼接就好了
}, function (error, response, body) {
  console.log('-----', response.statusCode);

  if (!error && response.statusCode == 200) {
    console.log(body)
    const rows = body.Data;
    console.log('-----rows',rows);
    
    let title = ['id', 'webMonitorId', 'projectName', 'projectType', 'userTag']//设置表头
    data.push(title) // 添加完表头 下面就是添加真正的内容了
    rows.forEach((e) => {
      let arrInner = []
      arrInner.push(e.id)
      arrInner.push(e.webMonitorId)
      arrInner.push(e.projectName)
      arrInner.push(e.projectType)
      arrInner.push(e.userTag);
      // Create(Test, {
      //   id: e.id,
      //   webMonitorId: e.webMonitorId,
      //   projectName: e.projectName,
      //   projectType: e.projectType,
      //   userTag:e.userTag
      // }, (a) => {
      //   console.log('-----a',a);

      // })
      data.push(arrInner)
    });
    console.log('----data', data);

  }
}); 