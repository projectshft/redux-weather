import { useState } from 'react';
import HourlyForecast from '../HourlyForecasts/HourlyForecast';
import Precipitation from '../Graphs/Precipitation';
import Graphs from '../Graphs/Graphs';

const MainContent = () => (
  <div className="my-4 mr-4 flex w-full flex-col items-center justify-start overflow-clip">
    <HourlyForecast />
    <Graphs />
  </div>
);

export default MainContent;
