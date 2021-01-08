import React from 'react';
import { Layout } from 'antd';
import { AHeader, ASiderWrapper } from 'components';
import classnames from 'classnames';
import AuthStore from 'config/AuthStore';

import './index.less';
import { observer } from 'mobx-react';

const wrapperArea = { display: 'flex', flex: '0 0 92px', transition: 'all 0.2s' };

const { Content } = Layout;

export interface EpidemicLayoutProps {
  layoutClassName?: string;
  contentClassName?: string;
}

const EpidemicLayout: React.FunctionComponent<EpidemicLayoutProps> = ({
  children,
  layoutClassName,
  contentClassName,
}) => {


  return (
    <Layout className={classnames('open-layout', layoutClassName)}>
      <Layout>
        {/* <div style={wrapperArea}>
          <ASiderWrapper />
        </div> */}
        {/* <div style={wrapperArea}>
          {AuthStore.islogin && <ASiderWrapper />}
        </div> */}
        <AHeader />
        <ASiderWrapper />
        <Content className={classnames('open-content', contentClassName)}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );

}

export default observer(EpidemicLayout);