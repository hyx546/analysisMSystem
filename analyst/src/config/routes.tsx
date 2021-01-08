import React, { } from 'react';

import PageHome from 'pages/home';
import Geography from 'pages/geography';
import VisitPage from 'pages/visitPage';
import VisitSpeed from 'pages/visitSpeed';
import JsError from 'pages/jsError';
import API from 'pages/API';
import Terminal from 'pages/terminal';


export interface RouteConfigProps {
  path: string;
  text: string;
  components: JSX.Element | null;
}

const ROUTES: RouteConfigProps[] = [
  {
    path: '/home',
    text: '应用总览',
    components: <PageHome />
  }, {
    path: '/visitPage',
    text: '访问页面',
    components: <VisitPage />
  }, {
    path: '/visitSpeed',
    text: '访问速度',
    components: <VisitSpeed />
  }, {
    path: '/jsError',
    text: 'JS错误',
    components: <JsError />
  }, {
    path: '/API',
    text: 'API请求',
    components: <API />
  },
  {
    path: '/geography',
    text: '地理',
    components: <Geography />
  },
  {
    path: '/terminal',
    text: '终端',
    components: <Terminal />
  }

];

// 默认路由
export const loginDefaultMountApp = '#/home';

export const defaultMountApp = () => {
  if (!window.localStorage.getItem('_t')) {
    return '#/login';
  } else {
    return loginDefaultMountApp;
  }
};

export { ROUTES };