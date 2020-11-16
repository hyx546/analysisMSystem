import React from 'react';

import { AHeader, AMenu } from 'components';
import { Layout } from 'antd';

import RouterDom from './router';
import _ from "lodash";
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

const App = () => {


  return (
    <Layout>
      <Header>
        <AHeader />
      </Header>
      <Layout>
        <Sider>
          <AMenu />
        </Sider>
        <Content>
          <RouterDom />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
