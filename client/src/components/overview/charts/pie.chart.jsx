import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import css from "@modules/overview.module.css";

const PieChart = ({ data, colors }) => {
  useEffect(() => {
    const chartDom = document.getElementById('pieChart');
    const myChart = echarts.init(chartDom);

    const option = {
      tooltip: { trigger: 'item' },
      color: colors,
      legend: {
        orient: 'vertical',
        left: 'right',
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          data: data,
          label: {
            position: 'outside',
            formatter: '{b}: {c} ({d}%)',
          },
        },
      ],
    };

    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, [data, colors]);

  return <div id="pieChart" className={`${css.pie}`} />;
};

export default PieChart;
