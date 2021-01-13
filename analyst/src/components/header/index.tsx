import './style.less';

import React, { useState } from 'react';

import {
  Modal,
  Popover,
} from 'antd';
import { Icon } from 'Icon';
import { withRouter } from 'react-router-dom';

const Header = (props: any) => {

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    window.localStorage.setItem('_t', '');
    window.localStorage.setItem('_user', '');
    setVisible(false);
    window.location.reload()
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const content = (
    <div className="log_out" onClick={showModal}>
      退出登陆
    </div>
  );
  const user = window.localStorage.getItem('_user') && JSON.parse(window.localStorage.getItem('_user') || "");
  return (
    <div className="header">
      <div className="_title" onClick={() => props.history.push({ pathname: '/home' })}>
        <Icon className="linechart" type="icon-linechart" style={{ color: '#ffffff' }} />前端监控平台
        <div className="setting">
          <Popover placement="bottomRight" content={content} trigger="click">
            {user?.real_name || user?.name}
          </Popover>
        </div>
      </div>
      <Modal title="Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <p>确定要退出登录吗？</p>
      </Modal>
    </div>
  )
}

export default withRouter(Header)
