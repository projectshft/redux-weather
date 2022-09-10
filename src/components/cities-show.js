

const CitiesShow = (newState => {
  console.log('@cities-show');

  return (
   
    <div>
      <table className="table table-hover" id="display">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {newState.forecast?.map((f) => {
            return (
              <tr key={f.dt}>
                <td>{f.temperature}</td>
                <td>{f.pressure}</td>
                <td>{f.humidity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});


export default CitiesShow;