import { Input } from 'antd';
import React from 'react';

import './index.less';

const { Search } = Input;

const columnLeft: React.FC<any> = (props) => {

  const {
    title,
    placeholder,
    onSearch,
    searchDisabled
  } = props;

  const onClickSearch = () => {
    onSearch && onSearch();
  }

  return (
    <div className="page_left" >
      <div className="page_left_title">{title}</div>
      <Search
        placeholder={placeholder}
        allowClear
        enterButton
        size="middle"
        onSearch={onClickSearch}
      />
      {props.children}
    </div>
  );
}

export default columnLeft;
