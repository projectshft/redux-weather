// header DOM component
const header = (props) => (
  <div>
    <div className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Weather Forecast</h1>
      </div>
    </div>
    <div className="container">{props.children}</div>
  </div>
);

export default header;
