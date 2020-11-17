import './style.css';

import React from 'react';

import { Icon } from 'Icon';

const Header = () => {
  return (
    <div className="header">
      <div className="_title" >
        <Icon className="linechart" type="icon-linechart" style={{color:'#ffffff'}}/>前端监控平台
      </div>
    </div>
  )
}

export default Header
