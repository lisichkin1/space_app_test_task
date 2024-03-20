import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';
import styles from './LineChart.module.scss';
export const QuartalChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [2015, 2016, 2017, 2018, 2019, 2020],
            datasets: [
              {
                label: '',
                data: [39, 43, 49, 51, 54, 56],
                backgroundColor: '#e01e2e',
                borderColor: '#e01e2e',
                borderWidth: 2,
                pointBackgroundColor: '#e01e2e',
                pointBorderColor: '#e01e2e',
                cubicInterpolationMode: 'monotone',
                pointBorderWidth: 4,
              },
            ],
          },
          options: {
            scales: {
              y: {
                suggestedMin: 30,
                ticks: {
                  padding: 30,
                  callback: function (value) {
                    return value + '%';
                  },
                  font: {
                    size: 14,
                    family: 'PF Agora Sans Pro',
                  },
                },
                border: {
                  display: false,
                  width: 0,
                },
              },
              x: {
                ticks: {
                  padding: 20,
                  font: {
                    size: 16,
                    weight: 700,
                    family: 'PF Agora Sans Pro',
                  },
                },
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      }
    }
  }, []);

  return (
    <canvas
      className={styles.chart}
      ref={chartRef}
      id="myChart"
      style={{ width: '100%', height: '380px' }}></canvas>
  );
};
