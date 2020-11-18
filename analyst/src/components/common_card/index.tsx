import { Button, DatePicker, Menu } from 'antd';
import { Icon } from 'Icon';
import React, { useState } from 'react';

import './index.less';

const { RangePicker } = DatePicker;

const timeData = [
  {
    time: '60分钟'
  },
  {
    time: '4时'
  },
  {
    time: '12时'
  }, {
    time: '24时'
  }, {
    time: '3天'
  }, {
    time: '7天'
  }, {
    time: '自定义'
  },]

interface commonCardProps {
  title: string,
  style?: any
}

const menu = (
  <Menu style={{ display: 'flex' }}>
    <Menu.Item>
      <Button>12时</Button>
    </Menu.Item>
    <Menu.Item>
      <Button>24时</Button>
    </Menu.Item>
    <Menu.Item>
      <Button>3天</Button>
    </Menu.Item>
    <Menu.Item>
      <Button>7天</Button>
    </Menu.Item>
    <Menu.Item>
      <Button>自定义</Button>
    </Menu.Item>
    <Menu.Item>
      <RangePicker />
    </Menu.Item>

  </Menu>
);

const CommonCard = (props: any) => {
  const { style, title } = props;

  console.log('-----', props);


  const [visible, setVisible] = useState(false);
  return (
    <div className="card_container" style={{ ...style }}>
      <div className="card_header">
        <div className="card_header_title">{title}</div>
        <div className="card_header_btn">
          <Icon type="icon-shizhong" size={20} onClick={() => setVisible(true)}></Icon>
          {
            visible && <div className="madal_list">
              {
                timeData.map(item => (
                  <Button>{item.time}</Button>
                ))
              }
            </div>
          }
        </div>
      </div>
      <div className="card_body">
        {props.children}
      </div>


    </div>
  );
}

export default CommonCard;
