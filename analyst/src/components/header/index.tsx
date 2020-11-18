import React from 'react';

import { Icon } from 'Icon';
import './style.less';
import { withRouter } from 'react-router-dom';

const Header = (props:any) => {
  return (
    <div className="header">
      <div className="_title" onClick={() => props.history.push({pathname:'/home'})}>
        <Icon className="linechart" type="icon-linechart" style={{ color: '#ffffff' }} />前端监控平台
      </div>
    </div>
  )
}

export default withRouter(Header)
