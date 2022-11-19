import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
// eslint-disable-next-line import/no-unresolved
import { Line } from 'react-chartjs-2';

const PressureChart = ({ pressureData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
        label: 'Pressure',
        data: pressureData.map((dataPoint) => dataPoint),
      },
    ],
  };
  return (
    <Col md={3}>
      <Line data={data} options={options} />
    </Col>
  );
};

PressureChart.propTypes = {
  pressureData: PropTypes.array,
};
export default PressureChart;
