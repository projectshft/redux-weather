import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
// eslint-disable-next-line import/no-unresolved
import { Line } from 'react-chartjs-2';

const PressureChart = ({ pressureData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pressure',
      },
    },
  };

  const labels = pressureData.map((dataPoint, i) => i);

  const data = {
    labels,
    datasets: [
      {
        data: pressureData.map((dataPoint) => dataPoint),
      },
    ],
  };
  return (
    <Col>
      <Line data={data} options={options} />
    </Col>
  );
};

PressureChart.propTypes = {
  pressureData: PropTypes.array,
};
export default PressureChart;
