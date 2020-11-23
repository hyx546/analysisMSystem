import { Button, DatePicker, Dropdown, Menu } from 'antd';
import { Icon } from 'Icon';
import React, { useState } from 'react';

import './index.less';

const { RangePicker } = DatePicker;

const CommonCard = (props: any) => {
  const { style, title } = props;

  const [visible, setVisible] = useState(false);
  const [timeVisible, setTimeVisible] = useState(false)

  const handleMenuClick = (e: { key: string; }) => {
    if (e.key === '1') {
      setVisible(false)
    }
  }

  const menu = (
    <Menu style={{ display: 'flex' }} onClick={() => handleMenuClick}>
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
      <Menu.Item onClick={() => setTimeVisible(true)}>
        <Button>自定义</Button>
      </Menu.Item>
      {
        timeVisible && <Menu.Item key="1">
          <RangePicker onClick={e => e.stopPropagation()} />
        </Menu.Item>
      }
    </Menu>
  );

  const getPopupContainer = () => document.getElementById('card') as HTMLElement;

  return (
    <div className="card_container" id="card" style={{ ...style }} >
      <div className="card_header">
        <div className="card_header_title">{title}</div>
        <div className="card_header_btn">
          <Dropdown overlay={menu} trigger={['click']} arrow
            onVisibleChange={(flag) => setVisible(flag)}
            getPopupContainer={getPopupContainer}
            visible={visible}
          >
            <Icon type="icon-shizhong" size={20} onClick={e => e.preventDefault()} />
          </Dropdown>
        </div>
      </div>
      <div className="card_body">
        {props.children}
      </div>
    </div>
  );
}

export default CommonCard;
