import { List } from 'antd';
import { Icon } from 'Icon';
import React from 'react';
import ColumnLeft from 'components/layout/column';
import { PageVData } from 'config/visitPageData';

const JsError= () => {
  const ListItem = (item: any) => {
    return (
      <List.Item>
        {item.url}
        <div style={{ float: 'right' }}>
          <span >{item.count}{`(${item.percent}%)`}</span>
          <Icon type="icon-arrow-right" />
        </div>
      </List.Item>
    )
  }
  return (
    <div className="visit_page">
      <div className="visit_page_left">
        <ColumnLeft title="按JS错误时间排行" placeholder="请输入要查询的关键字">
          <List
            bordered
            size="small"
            dataSource={PageVData}
            renderItem={item => ListItem(item)}
          />
        </ColumnLeft>
      </div>
      <div className="visit_page_right"></div>
    </div>
  );
}

export default JsError;
