import './App.less';

import React from 'react';

import { ConfigProvider } from 'antd';
import {
  AHeader,
  ALayout,
} from 'components';
import antdConfig from 'config/antdConfig';
import { ROUTES } from 'config/routes';
import Login from 'pages/login';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

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
      {
        window.localStorage.getItem('_t') && <AHeader />
      }
      {window.localStorage.getItem('_t') && <ALayout>
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
      </ALayout>}
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
  return (
    <ConfigProvider {...antdConfig}>
      <GlobalEventContext.Provider value={props}>
        <Router basename="/">
          {/* 渲染登录路由 */}
          {!window.localStorage.getItem('_t') && renderAuthRoutes()}
          {/* 渲染路由 */}
          {renderRoute()}
        </Router>



      </GlobalEventContext.Provider>
    </ConfigProvider>
  );

}

export default (App);