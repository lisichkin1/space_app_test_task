import Chart, { ChartConfiguration } from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

import styles from './RadialChart.module.scss';

const redColor = 'rgb(255, 99, 132)';

export const RadialChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'radar', number[], string | string[]> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [
              '1',
              'Расходы',
              '2',
              'Прибыль',
              'Надбавка №2',
              'Пошлина в такую-то структуру',
              '4',
              '5',
              '6',
              '7',
              '1',
              '2',
              'Продажи',
              '4',
              'Закупка',
              '6',
              'Налог на ввоз',
            ],
            datasets: [
              {
                label: 'My dataset',
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                pointBackgroundColor: redColor as string,
                data: [
                  null,
                  105,
                  null,
                  126,
                  70,
                  105,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  126,
                  null,
                  105,
                  null,
                  126,
                  55,
                ],
                pointBorderColor: '#e01e2e',
                pointBorderWidth: 5,
                pointHitRadius: 5,
              },
            ],
          },
          options: {
            scales: {
              r: {
                grid: {
                  circular: true,
                },
                angleLines: {
                  display: false,
                },
                ticks: {
                  stepSize: 21,
                  display: false,
                },
                pointLabels: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },

              tooltip: {
                enabled: true,
                position: 'average',
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(0,0,0,0.8)',

                titleFont: {
                  size: 16,
                },
                bodyFont: {
                  size: 14,
                },
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
      id="nestedCircleChart"
      width="500"
      height="500"></canvas>
  );
};
