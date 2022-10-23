import Graphs from './Graphs';
import HourlyForecast from './HourlyForecast';

const MainContent = () => (
  <div className="flex w-full grow flex-col overflow-hidden bg-blue-100 px-4">
    <HourlyForecast />
    <Graphs />
  </div>
);

export default MainContent;
