/* eslint-disable react-hooks/rules-of-hooks */
import { Menu } from 'antd';
import React, { useState } from 'react';

import './index.less';

const MenuLeft = (props: any) => {

  const { data = [] } = props;

  const [current, setCurrent] = useState(data[0].key);

  const handleClick = (e: any) => {
    setCurrent(e.key)
  }

  return (
    <div className="page_left">
      <Menu onClick={(e) => handleClick(e)} selectedKeys={[current]} mode="horizontal">
        {
          data.map((item: any) => {
            return (
              <Menu.Item key={item.key}>
                {item.title}
              </Menu.Item>
            )
          })
        }
      </Menu>
      {props.children}
    </div>
  );
}

export default MenuLeft;
