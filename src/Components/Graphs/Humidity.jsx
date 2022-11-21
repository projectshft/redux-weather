import { useSelector } from 'react-redux';
import moment from 'moment';
import { ResponsiveLine } from '@nivo/line';

const Humidity = () => {
  const weatherData = useSelector((state) => state.fiveDayWeather.fiveDayData);

  let content;
  let data;

  if (weatherData.length === 0) {
    content = <div>Hello</div>;
  } else {
    data = [
      {
        id: 'Precipitation',
        data: weatherData.list.map((weather) => ({
          x: moment.unix(weather.dt).format('ddd ha'),
          y: Math.floor(weather.main.humidity),
        })),
      },
    ];
    content = (
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 60, bottom: 60, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 100,
          stacked: false,
          reverse: false,
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        enablePoints={false}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh
        legends={[]}
      />
    );
  }

  return (
    <div className="flex h-96  w-full flex-col items-center justify-center rounded-lg bg-white p-2 shadow-md">
      <div>Humidity</div>
      <div className="h-full w-full">{content}</div>
    </div>
  );
};

export default Humidity;
