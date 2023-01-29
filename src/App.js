import React from 'react'
import DisplayHumidity from './components/Display-Humidity';
import { useState } from 'react';


function App () {

  const [city, setCity] = useState('');
  
  
  return (
    <div>
      <form>
        <input
        value={city}
        onChange={(e) => setCity(e.target.value)}></input>
        {/* <button onClick={renderWeather}>Submit</button> */}
        <div>temp:</div>
      </form>
      <DisplayHumidity city={city} />
    </div>
  )
}

export default App;

//the issue we are having is that useEffect is going before everything else in Display-Humidity. So we can't get it to wait till we type something in for state we are screwed. 
