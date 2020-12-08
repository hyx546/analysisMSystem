import React from 'react';
import MenuLeft from 'components/menu/menuLeft';
import { apiMenu } from 'consts';
import { Input} from 'antd';
import { PageVData } from 'config/visitPageData';

import './index.less';
import CommonList from 'components/common_list';

const { Search } = Input;

const ApiPage = () => {

  
  return (
    <div className="api_page">
      <div className="api_page_left">
        <MenuLeft
          data={apiMenu}
        >
          <Search
            placeholder="请输入要查询的关键字"
            allowClear
            enterButton
            size="middle"
          // onSearch={onClickSearch}
          />
          <CommonList data={PageVData}></CommonList>
        </MenuLeft>
      </div>
      <div className="api_page_right"></div>
    </div>
  );
}

export default ApiPage;
