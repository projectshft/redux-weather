import '../index.css';

const header = (props) => (
  <div className="custom">
    <div className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Search the weather for a city</h1>
      </div>
    </div>
    <div className="container">{props.children}</div>
  </div>
);

export default header;
