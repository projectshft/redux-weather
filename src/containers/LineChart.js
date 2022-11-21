/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Col, Modal } from 'react-bootstrap';
import ProptTypes from 'prop-types';
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

const LineChart = ({ config }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  return (
    <>
      <Col md={3}>
        <Line
          onClick={handleShow}
          className="chart-small"
          data={config.data}
          options={config.options}
        />
      </Col>
      <Modal show={show} onHide={handleHide} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{`${config.location}: ${config.options.plugins.title.text}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Line
            className="chart-modal"
            data={config.data}
            options={{ ...config.options, maintainAspectRatio: true }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
LineChart.propTypes = {
  config: ProptTypes.object,
};

export default LineChart;
