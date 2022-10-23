import { useGetWeatherQuery } from '../Features/api/apiSlice';
import HourSnippet from './HourSnippet';

const HourlyForecast = () => {
  const { data: weather, isLoading, isSuccess, isError, error } = useGetWeatherQuery();

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = weather.list.map((hour) => <HourSnippet hour={hour} key={hour.dt} />);
  } else if (isError) {
    content = <div>error</div>;
  }

  return (
    <div className="flex h-2/5 flex-col overflow-hidden">
      <div className="m-3">Three Hour Forecast</div>
      <div className="flex flex-row overflow-x-auto">{content}</div>
    </div>
  );
};

export default HourlyForecast;
