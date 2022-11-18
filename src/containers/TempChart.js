import React from 'react';
import ProptTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TempChart = ({ data }) => {
  console.log(data);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = data.map((dataPoint, i) => i);

  const dataInfo = {
    labels,
    datasets: [
      {
        data: data.map((dataPoint) => dataPoint),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line data={dataInfo} options={options} />;
};

TempChart.propTypes = {
  data: ProptTypes.arrayof(ProptTypes.number),
};
export default TempChart;
