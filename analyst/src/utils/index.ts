/*
 * @Author: your name
 * @Date: 2021-01-08 15:42:20
 * @LastEditTime: 2021-01-08 15:42:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/src/utils/index.ts
 */
/**
 * @name: linkTo
 * @desc: 根据路由跳转hash
 * @params:
 * @return:
 */
export function linkTo(path: string) {
  if (path.indexOf('#') !== -1) {
    window.location.href = `${window.location.origin}/${path}`;
  } else {
    window.location.href = `${window.location.origin}/#${path}`;
  }
}