import React from 'react';
import ColumnLeft from 'components/layout/column';
import { PageVData } from 'config/visitPageData';
import CommonList from 'components/common_list';

const VisitSpeed = () => {

  return (
    <div className="visit_page">
      <div className="visit_page_left">
        <ColumnLeft title="页面访问速度排行" placeholder="请输入要查询的关键字">
          <CommonList data={PageVData}></CommonList>
        </ColumnLeft>
      </div>
      <div className="visit_page_right"></div>
    </div>
  );
}

export default VisitSpeed;
