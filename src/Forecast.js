import { useGetForecastQuery } from './features/api/apiSlice'

const Forecast = () => {
  const {
    data: forecastData,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetForecastQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = forecastData
  } else if (isError) {
    content = <p>{error}</p>
  }
  
  return (
    <main>
      <h1>Data from weatherAPI</h1>
      <ul>
        <li>{content.city}</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </main>
  )
};

export default Forecast;