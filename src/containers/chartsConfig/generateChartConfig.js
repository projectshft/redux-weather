const generateChartConfig = (
  weatherData,
  timeData,
  titles,
  colors,
  location
) => {
  const average =
    weatherData.reduce((acc, dataPoint) => acc + dataPoint, 0) /
    weatherData.length;

  const labels = timeData.formattedDays;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: titles.y,
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
        text: titles.title,
      },
      annotation: {
        annotations: {
          annotation: {
            type: 'line',
            borderColor: 'black',
            borderDash: [6, 3],
            borderWidth: 2,
            scaleID: 'y',
            value: average,
            label: {
              display: false,
              content: `Avg. ${Math.round(average)}`,
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
        data: weatherData.map((dataPoint) => dataPoint),
        borderColor: colors.borderColor,
        backgroundColor: colors.backgroundColor,
        pointRadius: 0,
      },
    ],
  };
  return {
    options,
    data,
    location,
  };
};

export default generateChartConfig;
