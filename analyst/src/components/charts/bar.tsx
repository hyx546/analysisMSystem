import React from 'react';
import ReactEcharts from 'echarts-for-react';

const legendData = ['PV', 'UV'];
const MyBar: React.FC<any> = ({
  Data = []
}) => {
  console.log('-----Data', Data);
  const realData = Data.map((item: { createTime: string | any[]; }) => {
    if (item.createTime) {
      item.createTime = item.createTime.slice(11, 16)
    }
    return item
  })

  const PVData = Data.map((item:any) => item.pv);
  const UVData = Data.map((item:any) => item.uv)
  const xAxis = realData.map((item:any) => item.createTime)

  const getOption = () => {
    let option: any = {
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
      color: ['rgb(253, 208, 137)', 'rgb(255, 127, 121)']
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

