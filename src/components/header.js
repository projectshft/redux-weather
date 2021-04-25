const header = (props) => {
  return (
    <div>
      <div className='jumbotron text-center'>
        <div className='container'>
          <h2 className='jumbotron-heading display-4'>The REDUX Weather App</h2>
        </div>
      </div>
      <div className='container'>
        {props.children}
      </div>
    </div>
  )
};

export default header;