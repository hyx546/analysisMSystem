const request = require("request");//request请求库

export const crawlerPostFun = (baseUrl, method, params, callBack) => {
  const data = [] // 把这个数组写入excel

  request({
    url: baseUrl,//你要请求的地址
    method: method,//请求方法 post get
    json: true,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "Access-Control-Allow-Methods": 'POST,GET,OPTIONS',
    },
    body: params,//这里是post 传的参数 如果是get 方法在url上拼接就好了
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callBack(body);
    }
  })

}