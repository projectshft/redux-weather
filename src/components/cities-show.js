import { useSelector } from "react-redux";
// import React from "react";
// import  {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const CitiesShow = () => {

  const forecasts = useSelector((state) => state.forecasts);

  const eachCity = forecasts.map((forecast) => {
    
    return {
    id: forecast.id,
    city: forecast.city.name,
    temperature: forecast.temperature,
    pressure: forecast.pressure,
    humidity: forecast.humidity
    }});
  }
 

  // const renderCities = () => {
  //   return forecasts.map((eachCity) => {




  // forecasts.forEach((forecast) => {
    

  // this block of code is just brainstorming...not stubbed out yet
  // forecasts.map(val, id) => {
  //   return (
  //     <tr key={val.id}>
  //       <td>{val.city}</td>
  //       <td>
  //         <Sparklines data={val.temperature} height={120} width={180}>
  //           <SparklinesLine color="red" />
  //           <SparklinesReferenceLine type="avg" />
  //         </Sparklines>
  //       </td>
  //       <td>
  //         <Sparklines data={val.pressure} height={120} width={180}>
  //           <SparklinesLine color="blue" />
  //           <SparklinesReferenceLine type="avg" />
  //         </Sparklines>
  //       </td>
  //       <td>
  //         <Sparklines data={val.humidity} height={120} width={180}>
  //           <SparklinesLine color="green" />
  //           <SparklinesReferenceLine type="avg" />
  //         </Sparklines>
  //       </td>
  //     </tr>
  //   );
  // };


// this block of code pushes all city values into one array, all temperature values into another array, all pressure values into another array, and all humidity values into another array...
//   const city = [];
//   const temp = [];
//   const pressure = [];
//   const humidity = [];

//   forecasts.forEach((f) => {
//     temp.push(f.temperature);
//     pressure.push(f.pressure);
//     humidity.push(f.humidity);
//   });

//   forecasts.reduce((acc, f) => {
//     if (acc.indexOf(f.city) === -1) {
//       acc.push(f.city);
//     }
//     return acc;
//   }, city);

//   console.log(forecasts);



//   return (

//     <div>
//       <table className="table table-hover" id="display">
//         <thead>
//           <tr key= {city}>
//             <th>City</th>
//             <th>Temperature (F)</th>
//             <th>Pressure (hPa)</th>
//             <th>Humidity (%)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//               <tr>
//                 <td>{city}</td>
//                 <td>
//                   <Sparklines data={temp} height={110} width={180} 
//                   >
//                     <SparklinesLine color="red" />
//                     <SparklinesReferenceLine type="avg" />
//                   </Sparklines>
//                 </td>
//                 <td>
//                   <Sparklines data={pressure} height={120} width={180}>
//                     <SparklinesLine color="green" />
//                     <SparklinesReferenceLine type="avg" />
//                   </Sparklines>
//                 </td>
//                 <td>
//                   <Sparklines data={humidity} height={120} width={180}>
//                     <SparklinesLine color="blue" />
//                     <SparklinesReferenceLine type="avg" />
//                   </Sparklines>
//                 </td>
//               </tr>
//           }
//         </tbody> 
//       </table>
//     </div>
//   );
// } 

export default CitiesShow;

