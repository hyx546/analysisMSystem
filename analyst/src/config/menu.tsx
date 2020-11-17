import { Icon } from 'Icon';
import React from 'react';

export const menuConfig = [
  {
    path: '/home',
    title: '应用总览',
    linkProps: {},
    menuItemProps: {
      icon:<Icon type="icon-laptop" />
    },
  },
  {
    path: '/visitPage',
    title: '访问页面',
    linkProps: {},
    menuItemProps: {
      icon:<Icon type="icon-switcher" />
    }
  },
  {
    path: '/visitSpeed',
    title: '访问速度',
    linkProps: {},
    menuItemProps: {
      icon:<Icon type="icon-linechart1" />
    }
  },
  {
    path: '/jsError',
    title: 'JS错误',
    linkProps: {},
    menuItemProps: {
      icon:<Icon type="icon-exception" />
    }
  },
  {
    path: '/API',
    title: 'API请求',
    linkProps: {},
    menuItemProps: {
      icon:<Icon type="icon-api" />
    }
  },
  {
    path: '/geography',
    title: '地理',
    linkProps: {},
    menuItemProps: {
      icon:<Icon type="icon-diqiu" />
    }
  },
  {
    path: '/terminal',
    title: '终端',
    linkProps: {},
    menuItemProps: {
      icon:<Icon type="icon-ie" />
    }
  },
]

export const DEFAULT_OPEN_KEY = ['/home'];