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

const Chart = ({ config }) => (
  <Col md={3}>
    <Line data={config.data} options={config.options} />
  </Col>
);

Chart.propTypes = {
  config: ProptTypes.object,
};

export default Chart;
