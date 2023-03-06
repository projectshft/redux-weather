import FiveDayIndex from './5day-index';

const header = () => (
  <div>
    <div className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Redux Weather</h1>
      </div>
    </div>
    <div className="container">{FiveDayIndex()}</div>
  </div>
);

export default header;
