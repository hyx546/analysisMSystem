import React from 'react';
import ReactEcharts from 'echarts-for-react';

const xAxis = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
const legendData = ['PV', 'UV'];
const PVData = [200, 300, 55, 70, 80, 120, 200]
const UVData = [150, 300, 40, 60, 80, 100, 150]

const MyBar = () => {
  const getOption = () => {
    let option: any = {
      // title: {
      //   text: '用户骑行订单'
      // },
      legend: {
        data: legendData
      },
      tooltip: {   //展示数据
        trigger: 'axis'
      },
      xAxis: {
        data: xAxis
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'PV',
          type: 'bar',
          data: PVData
        }, {
          name: 'UV',
          type: 'bar',
          data: UVData
        }
      ],
      color:['rgb(253, 208, 137)','rgb(255, 127, 121)']
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

