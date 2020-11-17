import { Layout } from 'antd';
import { Icon } from 'Icon';
import React from 'react';

import './index.less';

interface CardModalProps {
  title: string;
  value: string;
  color: string
}

const CardModal: React.FC<CardModalProps> = ({
  title = "JS错误率",
  value = "973ms",
  color = "red"
}) => {
  return (
    <Layout className="card_content">
      <div className="card_content_bg" style={{ background: color }}>
        <div className="card_content_title" >
          {title}
          <Icon type="icon-wenhao" style={{marginLeft:'5px'}}></Icon>
        </div>

      </div>
      <div className="card_content_dec">同比：{value}</div>
    </Layout>
  );
}

export default CardModal;
