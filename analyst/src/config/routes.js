import { lazy } from 'react';

// const PageHome = lazy(() => import("pages/home"));
// const Geography = lazy(() => import("pages/geography"));
// const VisitPage = lazy(() => import("pages/visitPage"));
// const VisitSpeed = lazy(() => import("pages/visitSpeed"));
// const JsError = lazy(() => import("pages/jsError"));
// const API = lazy(() => import("pages/API"));
// const Terminal = lazy(() => import("pages/terminal"));

const ROUTES = [
  {
    key: '/home',
    icon: 'laptop',
    title: '应用总览',
    // component: PageHome
  }, {
    key: '/visitPage',
    icon: 'switcher',
    text: '访问页面',
    // component: VisitPage
  }, {
    key: '/visitSpeed',
    icon: 'linechart1',
    text: '访问速度',
    // component: VisitSpeed
  }, {
    key: '/jsError',
    icon: 'exception',
    text: 'JS错误',
    // component: JsError
  }, {
    key: '/API',
    icon: 'api',
    text: 'API请求',
    // component: API
  },
  {
    key: '/geography',
    icon: 'diqiu',
    text: '地理',
    // component: Geography
  },
  {
    key: '/terminal',
    icon: 'ie',
    text: '终端',
    // component: Terminal
  }

];

export { ROUTES };