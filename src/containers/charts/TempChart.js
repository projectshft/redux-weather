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

import generateChartConfig from '../config/generateChartConfig';

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

const TempChart = ({ tempData, timeData }) => {
  const config = generateChartConfig(
    tempData,
    timeData,
    {
      y: 'F  °',
      title: 'Temp (Farenheit)',
    },
    {
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  );
  // console.log(averageTemp);

  return (
    <Col md={3}>
      <Line data={config.data} options={config.options} />
    </Col>
  );
};

TempChart.propTypes = {
  tempData: ProptTypes.array,
  timeData: ProptTypes.object,
};

export default TempChart;
