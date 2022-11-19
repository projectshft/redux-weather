import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
// eslint-disable-next-line import/no-unresolved
import { Line } from 'react-chartjs-2';

import generateChartConfig from '../config/generateChartConfig';

const PressureChart = ({ pressureData, timeData }) => {
  const config = generateChartConfig(
    pressureData,
    timeData,
    {
      y: 'hPa',
      title: 'Pressure(hPa)',
    },
    {
      borderColor: 'rgb(179,27,27)',
      backgroundColor: 'rgb(179,27,27,0.5)',
    }
  );

  return (
    <Col md={3}>
      <Line data={config.data} options={config.options} />
    </Col>
  );
};

PressureChart.propTypes = {
  pressureData: PropTypes.array,
  timeData: PropTypes.object,
};
export default PressureChart;
