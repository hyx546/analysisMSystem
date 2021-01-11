/*
 * @Author: your name
 * @Date: 2021-01-08 14:15:12
 * @LastEditTime: 2021-01-08 14:51:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/src/utils/fetchData.ts
 */
import axios from 'axios';

// 创建一个axios的实例
export const Axios = axios.create({
  // baseURL 设置默认api路径
  timeout: 10000, // 设置超时时间
  headers: {
    responseType: "json",
    "content-type": 'application/json'
  }
})

// get请求
export const getData = (url: any, param = {}) => {
  console.log('-----url', url);
  return Axios.get(url, {
    params: param
  })
}

// post请求
export const postData = (url: any, param = {}) => {
  return Axios.post(url, param);
}