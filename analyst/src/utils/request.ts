/*
 * @Author: your name
 * @Date: 2021-01-08 14:51:49
 * @LastEditTime: 2021-01-08 14:59:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/src/utils/request.ts
 */

import { notification } from "antd";
import { get } from "lodash";
import { getData, postData } from "./fetchData";

export const defaultHttp = 'http://localhost:3003/api';

// 整合的一个get请求，
// url:请求的地址
// parm：参数对象
// callback：请求成功后的回调
// finallyFn：请求无论成功失败都会调用的一个回调，用于如loading的显示与消除
// erro：错误的回调

// get 请求
export const getApi = async ({
  url = '',
  parm = {},
  callback = (data: any) => { },
  finallyFn = () => { },
}) => {
  try {
    const response = await getData(
      url,
      parm
    );

    const errno = get(response, 'data.errno');
    if (response.status === 200 && errno === 0) {
      const data = get(response, 'data.data');
      callback(data);
    } else {
      const errmsg = get(response, 'data.errmsg');
      notification.error({ message: errmsg });
    }

  } catch (error) {
    finallyFn()
  }
}

export const postApi = async (
  url = '',
  parm = {},
  callback: Function = () => { },
  finallyFn = () => { },
) => {
  try {
    const response = await postData(
      url,
      parm,
    );
    const errno = get(response, 'data.errno');
    console.log('-----response',response);
    
    // if (response.status === 200 && errno === 0) {
    //   const data = get(response, 'data.data');
    //   callback(data);
    // } else {
    //   const errmsg = get(response, 'data.errmsg');
    //   notification.error({ message: errmsg });
    // }
  } catch (error) {
    finallyFn();
  }
};