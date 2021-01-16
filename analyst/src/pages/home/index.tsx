import { cardData, Top8Data } from 'config/homeData';
import React, { useEffect, useState } from 'react';
import CardModal from './components/home_card';
import { CommonCard } from 'components';
import { List, Table } from 'antd';
import MyBar from 'components/charts/bar';
import Amap from 'components/map';
import { provienceData } from 'components/map/geo';
import { browserData, browserLegendData, columns, OSData, OSLegendData } from 'consts/home';
import APie from 'components/charts/pie';
import { defaultHttp, postApi } from 'utils/request';
import './index.less';


const Home = () => {

  const [top8Data, setTop8Data] = useState([]);
  const [pvAndUvData, setPvAndUvData] = useState([]);
  const [geoData, setGeoData] = useState([]);

  const [top8Time, setTop8Time] = useState(4);
  const [pvAndUvTime, setPvAndUvTime] = useState(4);
  const [geoTime, setGeoTime] = useState(4);

  // 访问页top8页面
  useEffect(() => {
    postApi(`${defaultHttp}/PageTopStatis`, {
      "TimeQuantum": top8Time,
      "top": 8
    }, (data: any) => {
      if (data) {
        setTop8Data(data)
      }
    })
  }, [top8Time]);

  // pv/uv 
  useEffect(() => {
    postApi(`${defaultHttp}/PvAndUvStatis`, {
      "TimeQuantum": pvAndUvTime,
    }, (data: any) => {
      if (data) {
        setPvAndUvData(data)
      }
    })
  }, [pvAndUvTime]);

  // 地理分布
  useEffect(() => {
    postApi(`${defaultHttp}/GeoStatis`, {
      "TimeQuantum": geoTime,
    }, (data: any) => {
      if (data) {
        setGeoData(data)
      }
    })
  }, [geoTime]);

  // 点击获得时间回调
  const timeCallBack = (value: number, type: string) => {
    switch (type) {
      case 'top8':
        setTop8Time(value)
        break;
      case 'pvAnduv':
        setPvAndUvTime(value)
        break;
      case 'geo':
        setGeoTime(value)
        break;
      default:
        break;
    }
  }

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
        <CommonCard title="pu/pv" style={{ marginRight: '1%' }} onClickFn={timeCallBack} type="pvAnduv" >
          <div>
            <MyBar Data={pvAndUvData} />
          </div>
        </CommonCard>
        <CommonCard title="访问量TOP8页面" onClickFn={timeCallBack} type="top8">
          <List
            size="small"
            dataSource={top8Data}
            renderItem={(item: any) => <List.Item>{item.page}<span style={{ float: 'right' }}>{item.count}</span></List.Item>}
          />
        </CommonCard>
      </div>
      <div className="home_geo" >
        <CommonCard title="地理分布" style={{ width: '100%', height: "500px" }}>
          <div className="geo_img">
            <Amap data={geoData} />
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
