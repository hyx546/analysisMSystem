import React from 'react';
import ReactEcharts from 'echarts-for-react';

const MyBar = () => {
  const getOption =()=> {
    let option:any = {
      title:{
        text:'用户骑行订单'
      },
      legend:{
        data:['PV','UV']
      },
      tooltip:{   //展示数据
        trigger:'axis'
      },
      xAxis:{
        data:['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis:{
        type:'value'
      },
      series:[
        {
          name:'PV',
          type:'bar',
          data:[2000,3000,5500,7000,8000,12000,20000]
        },{
          name:'UV',
          type:'bar',
          data:[1500,3000,4500,6000,8000,10000,15000]
        }
      ]
  }
  return option;
  }
  return (
    <div>
      <ReactEcharts option={getOption()} />
    </div>
  );
}

export default MyBar;

