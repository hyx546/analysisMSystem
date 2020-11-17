import React from 'react';
import { Layout, PageHeader, Spin } from 'antd';
import { BreadcrumbProps } from 'antd/lib/breadcrumb';
import { WithFalse } from './typings';
import './BasicLayout.less';

const { Content, Footer } = Layout;

export interface BasicLayoutProps {
  // Layout props
  className?: string;

  // Header props
  logo?: React.ReactNode | WithFalse<() => React.ReactNode>;
  title?: string;
  subTitle?: string;
  breadcrumb?: BreadcrumbProps;
  headerFooter?: React.ReactNode;
  headerContent?: React.ReactNode;
  headerExtra?: any;
  searchbar?: React.ReactNode;

  loading?: boolean;

  footer?: boolean | React.ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const {
    title,
    subTitle,
    children,
    breadcrumb,
    headerFooter,
    headerExtra,
    headerContent,
    searchbar,
    footer,
    loading,
  } = props;
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
          background: '#fff',
          marginBottom: '16px',
        }}
        title={title}
        subTitle={subTitle}
        breadcrumb={breadcrumb}
        footer={headerFooter}
        extra={headerExtra}
      >
        <div className="content">
          <div className="main">{headerContent}</div>
        </div>
      </PageHeader>

      {searchbar && (
        <div
          style={{
            background: '#fff',
            marginBottom: 16,
            padding: '20px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // height: 80,
          }}
        >
          {searchbar}
        </div>
      )}

      <Content>{children}</Content>

      {footer && (
        <Footer style={{ textAlign: 'center' }}>
          {React.isValidElement(footer) ? footer : 'ANALYST ©2020-2021 Created by HYX'}
        </Footer>
      )}
      {loading && <Spin />}
    </Layout>
  );
};

export default BasicLayout;
