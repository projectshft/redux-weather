const header = function (props) {

  return (
    <div>
      <div>
        <h1>Weather App</h1>
      </div>
      <div className="container">
        {props.children}
      </div> 
    </div>
  )    
};

export default header;