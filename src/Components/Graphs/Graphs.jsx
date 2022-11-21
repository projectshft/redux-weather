import { useState } from 'react';
import Humidity from './Humidity';
import Precipitation from './Precipitation';
import Pressure from './Pressure';
import Temperature from './Temperature';

const Graphs = () => {
  const [graphDisplayed, setGraphDisplayed] = useState('Precipitation');

  let content;

  switch (graphDisplayed) {
    case 'Precipitation':
      content = <Precipitation />;
      break;
    case 'Humidity':
      content = <Humidity />;
      break;
    case 'Pressure':
      content = <Pressure />;
      break;
    case 'Temperature':
      content = <Temperature />;
      break;
    default:
      content = null;
  }

  const handleGraphButtonClick = (e) => {
    setGraphDisplayed(e.target.innerHTML);
  };

  const buttonArray = ['Precipitation', 'Humidity', 'Pressure', 'Temperature'];
  const graphButtons = buttonArray.map((button, idx) => (
    <button
      key={idx}
      className={
        graphDisplayed === button
          ? 'mx-1 rounded  bg-blue-500 px-2 text-white hover:bg-blue-600 hover:text-white'
          : 'mx-1 rounded bg-gray-300 px-2 hover:bg-gray-400 hover:text-white'
      }
      type="button"
      onClick={(e) => handleGraphButtonClick(e)}
    >
      {button}
    </button>
  ));

  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-start justify-start">
        <div className="mb-4 text-2xl ">Forecast Graphs</div>
        <div className="mb-4 flex">{graphButtons}</div>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Graphs;
