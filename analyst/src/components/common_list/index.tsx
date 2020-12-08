import { List } from 'antd';
import { Icon } from 'Icon';
import React from 'react';

const CommonList = (props: any) => {

  const { data = [] } = props;

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
    <List
      bordered
      size="small"
      dataSource={data}
      renderItem={item => ListItem(item)}
    />
  );
}

export default CommonList;
