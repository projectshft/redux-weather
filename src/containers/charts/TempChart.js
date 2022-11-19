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

const TempChart = ({ tempData, timeData }) => {
  const averageTemp =
    tempData.reduce((acc, dataPoint) => acc + dataPoint, 0) / tempData.length;
  const labels = timeData.formattedDays;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: 'F °',
          color: 'black',
          font: {
            family: 'Times',
            size: 15,
            lineHeight: 1,
          },
          // padding: { top: 30, left: 0, right: 0, bottom: 0 },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Temp (Farenheit)',
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
              display: false,
              content: `Avg. ${Math.round(averageTemp)}F`,
              position: 'end',
            },
          },
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: tempData.map((dataPoint) => dataPoint),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        pointRadius: 0,
      },
    ],
  };

  // console.log(averageTemp);

  return (
    <Col md={3}>
      <Line data={data} options={options} />
    </Col>
  );
};

TempChart.propTypes = {
  tempData: ProptTypes.array,
  timeData: ProptTypes.object,
};

export default TempChart;
