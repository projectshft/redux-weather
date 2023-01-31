import React from 'react'
import CreateDisplay from './components/Create-Display';
import InputCity from './components/Input-City';





function App () {



  return (
    <div>
      <InputCity />
      <CreateDisplay />
    </div>
  )
}

export default App;

//the issue we are having is that useEffect is going before everything else in Display-Humidity. So we can't get it to wait till we type something in for state we are screwed. 
