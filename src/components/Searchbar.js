import React from 'react'
import { useState, useDispatch } from 'react'

const Searchbar = (props) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({})

  // const dispatch = useDispatch();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=75e7ccabdef5725374998f0c3f3798b2`;
 
  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(url)
       .then(response => response.json())
       .then(data => {
        console.log(data)
        setWeather(data);
        setCity('');
      })
    }
  }

  return (
    <div className="searchbar">Searchbar</div>
  )

}

export default Searchbar

//   const handleChange = (event) => {
//     event.preventDefault();
//     setCity(event.target.value);

//     dispatch(fetchSearch(city));
//     return false;
//   };

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           name="city"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="forecast"
//         />
//       </form>
//     </div>
//   )
// }

// export default Searchbar

