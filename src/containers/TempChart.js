import React from 'react';
import ProptTypes from 'prop-types';
import { Col } from 'react-bootstrap';
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
  Filler,
} from 'chart.js';

import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

const TempChart = ({ data }) => {
  console.log(data);

  const averageTemp =
    data.reduce((acc, dataPoint) => acc + dataPoint, 0) / data.length;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Temp',
      },
      annotation: {
        annotations: {
          annotation: {
            type: 'line',
            borderColor: 'black',
            borderDash: [6, 3],
            borderWidth: 2,
            scaleID: 'y',
            value: averageTemp,
            label: {
              display: true,
              content: `Avg. ${Math.round(averageTemp)}F`,
              position: 'end',
            },
          },
        },
      },
    },
  };

  const labels = data.map((dataPoint, i) => i);

  console.log(averageTemp);

  const dataInfo = {
    labels,
    datasets: [
      {
        fill: true,
        data: data.map((dataPoint) => dataPoint),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Col>
      <Line data={dataInfo} options={options} />
    </Col>
  );
};

TempChart.propTypes = {
  data: ProptTypes.array,
};
export default TempChart;
