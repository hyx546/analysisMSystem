import { cardData, Top8Data } from 'config/homeData';
import React from 'react';
import CardModal from './components/home_card';
import { CommonCard } from 'components';

import './index.less';
import { List } from 'antd';


const Home = () => {
  return (
    <div className="home" >
      <div className="home_card">
        {
          cardData.map(item => (
            <CardModal title={item.title} value={item.value} color={item.color} />
          ))
        }
      </div>
      <div className="home_pv" >
        <CommonCard title="pu/pv" style={{ marginRight: '1%' }}>
          <div>
            hhhhhhhhh
             </div>
        </CommonCard>
        <CommonCard title="访问量TOP8页面">
          <List
            size="small"
            dataSource={Top8Data}
            renderItem={item => <List.Item>{item.url}<span style={{ float: 'right' }}>{item.count}</span></List.Item>}
          />
        </CommonCard>
      </div>
      <div className="home_geo" >
        <CommonCard title="pu/pv" style={{ width: '100%' }}>
          <div>
            hhhhhhhhh
             </div>
        </CommonCard>
      </div>
      <div className="home_system">
        <CommonCard title="pu/pv" style={{ marginRight: '0.5%' }}>
          <div>
            hhhhhhhhh
             </div>
        </CommonCard>
        <CommonCard title="pu/pv" style={{ marginRight: '0.5%' }}>
          <div>
            hhhhhhhhh
             </div>
        </CommonCard>
        <CommonCard title="pu/pv">
          <div>
            hhhhhhhhh
             </div>
        </CommonCard>
      </div>
    </div>
  );
}

export default Home;
