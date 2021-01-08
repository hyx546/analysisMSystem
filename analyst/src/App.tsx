import React from 'react';
import { Redirect, Route, HashRouter as Router, Switch, } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import { AHeader, ALayout, ASiderWrapper } from 'components';
import antdConfig from 'config/antdConfig';
import { ROUTES } from 'config/routes';
import AuthStore from 'config/AuthStore'


import './App.less';
import Login from 'pages/login';
import Home from 'pages/home';
import { observer } from 'mobx-react';
import Sider from 'antd/lib/layout/Sider';


export interface EpidemicAppProps { }

/**
 * @description: 渲染auth相关的路由
 * @param {type}
 * @return:
 */
const renderAuthRoutes = () => (
  <>
    <Route path="/login" exact render={() => <Login />} />
  </>
);

/**
 * @description: 渲染在根模块的路由（除auth之外的）
 * @param {type}
 * @return:
 */
const renderRoute = () => {
  return (
    <>
      <ALayout>
        <Switch>
          {ROUTES.map(({ components, ...props }, index) => {
            return (
              <Route key={`${props.path}${index}`} {...props}>
                {components}
              </Route>
            )
          }
          )}
        </Switch>
      </ALayout>
      <Redirect
        to={
          window.localStorage.getItem('_t')
            ? '/home'
            : '/login'
        }
      />
    </>
  );
};

const wrapperArea = { display: 'flex', flex: '0 0 92px', transition: 'all 0.2s' };
const GlobalEventContext = React.createContext({});

const App: React.FunctionComponent<EpidemicAppProps> = (props) => {
  console.log('----AuthStore.islogin', AuthStore.islogin);

  return (
    <ConfigProvider {...antdConfig}>
      <GlobalEventContext.Provider value={props}>
        {/* <Router basename="/">
          
        </Router> */}
        {/* 渲染登录路由 */}
        {window.location.hash.startsWith('#/login') && renderAuthRoutes()}
        {/* 渲染路由 */}
        {renderRoute()}


      </GlobalEventContext.Provider>
    </ConfigProvider>
  );

}

export default observer(App);