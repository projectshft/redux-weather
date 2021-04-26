
const Heading = (props) => {
  return (
    <div>
      <div className='jumbotron mb-1 text-center'>
        <div className="container">
          <h1 className="jumbotron-heading">Redux Weather</h1>
        </div>
      </div>
      <div className='container'>
        {props.children}
      </div>
    </div>
  )
};

export default Heading;

