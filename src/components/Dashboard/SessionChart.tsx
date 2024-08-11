'use client';

import { Bar } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import axios from 'axios';
import { LocalConvenienceStoreOutlined } from '@mui/icons-material';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler
);

export default function SessionChart() {
  // const [dataMarket, setDataMarket] = useState([]);

  // async function getDataMarket() {
  //   setDataMarket([]);

  //   await axios
  //     .get(
  //       'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  //       {
  //         headers: {
  //           'X-CMC_PRO_API_KEY': `${process.env.COIN_MARKET_CAP}`,
  //           // 'X-CMC_PRO_API_KEY': `ab392e2a-9608-47c0-8bae-02a9784e1d41`,
  //           'Content-Type': 'application/json',
  //           'Access-Control-Allow-Credentials': true,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // useEffect(() => {
  //   getDataMarket();
  // }, []);

  return (
    <Bar
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
            border: {
              display: true,
            },
          },
        },
      }}
      data={{
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
          'January',
          'February',
          'March',
          'April',
        ],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: [
              78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82,
            ],
            barPercentage: 0.6,
          },
        ],
      }}
    />
  );
}
