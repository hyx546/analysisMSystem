import { cardData, Top8Data } from 'config/homeData';
import React from 'react';
import CardModal from './components/home_card';
import { CommonCard } from 'components';

import './index.less';
import { List, Table } from 'antd';
import MyBar from 'components/charts/bar';
import Amap from 'components/map';
import { provienceData } from 'components/map/geo';
import { browserData, browserLegendData, columns, OSData, OSLegendData } from 'consts/home';
import APie from 'components/charts/pie';


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
            <MyBar />
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
        <CommonCard title="地理分布" style={{ width: '100%', height: "500px" }}>
          <div className="geo_img">
            <Amap />
          </div>
          <div className="geo_list">
            <Table
              columns={columns}
              dataSource={provienceData}
              pagination={{
                pageSize: 7
              }}
              size="small"
            />
          </div>
        </CommonCard>
      </div>
      <div className="home_system">
        <CommonCard title="浏览器PV占比" style={{ marginRight: '0.5%' }}>
          <APie legendData={browserLegendData} data={browserData}></APie>
        </CommonCard>
        <CommonCard title="操作系统PV占比" style={{ marginRight: '0.5%' }}>
          <APie legendData={OSLegendData} data={OSData}></APie>
        </CommonCard>
        <CommonCard title="分辨率PV占比">
          <APie legendData={OSLegendData} data={OSData}></APie>
        </CommonCard>
      </div>
    </div>
  );
}

export default Home;
