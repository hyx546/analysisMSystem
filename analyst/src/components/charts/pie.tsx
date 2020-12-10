import React from 'react';
import ReactEcharts from 'echarts-for-react';

const APie = (props: any) => {
  const { legendData, data } = props;
  const getOption = () => {
    let option: any = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'right',
        data: legendData
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
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

export default APie;
