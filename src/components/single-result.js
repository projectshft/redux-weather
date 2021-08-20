import { Sparklines } from 'react-sparklines';

const SingleResult = ({ result }) => {
  const temperatures = result.map((curr) => {
    return curr.temperature;
  });
  const pressures = result.map((curr) => {
    return curr.pressure;
  });
  const humidities = result.map((curr) => {
    return curr.humidities;
  });

  return (
    <div className="row">
      <div className="col-md-3">
        <p><strong></strong></p>
      </div>  
      <div className="col-md-3">
        <Sparklines data={temperatures}></Sparklines>
        <Sparklines data={pressures}></Sparklines>
        <Sparklines data={humidities}></Sparklines>
      </div>

      <div className="col-md-3">
        <Sparklines data={temperatures}></Sparklines>
        <Sparklines data={pressures}></Sparklines>
        <Sparklines data={humidities}></Sparklines>
      </div>
      <div className="col-md-3">
        <Sparklines data={temperatures}></Sparklines>
        <Sparklines data={pressures}></Sparklines>
        <Sparklines data={humidities}></Sparklines>
      </div>

    </div>
    
  )

}

// 0: {id: 1629482400, temperature: 63.88, pressure: 1017, humidity: 73}
// 1: {id: 1629493200, temperature: 68.54, pressure: 1015, humidity: 58}
// 2: {id: 1629504000, temperature: 74.53, pressure: 1012, humidity: 42}
// 3: {id: 1629514800, temperature: 67.44, pressure: 1011, humidity: 56}
// 4: {id: 1629525600, temperature: 63.57, pressure: 1012, humidity: 63}
// 5: {id: 1629536400, temperature: 60.84, pressure: 1011, humidity: 72}
// 6: {id: 1629547200, temperature: 60.4, pressure: 1011, humidity: 75}
// 7: {id: 1629558000, temperature: 60.44, pressure: 1011, humidity: 77}
// 8: {id: 1629568800, temperature: 64.35, pressure: 1011, humidity: 67}
// 9: {id: 1629579600, temperature: 76.28, pressure: 1010, humidity: 37}
// 10: {id: 1629590400, temperature: 78.55, pressure: 1008, humidity: 32}
// 11: {id: 1629601200, temperature: 70.39, pressure: 1008, humidity: 49}
// 12: {id: 1629612000, temperature: 61.93, pressure: 1011, humidity: 68}
// 13: {id: 1629622800, temperature: 58.44, pressure: 1012, humidity: 79}
// 14: {id: 1629633600, temperature: 57.06, pressure: 1013, humidity: 82}
// 15: {id: 1629644400, temperature: 59.22, pressure: 1013, humidity: 76}
// 16: {id: 1629655200, temperature: 64.99, pressure: 1013, humidity: 58}
// 17: {id: 1629666000, temperature: 75.38, pressure: 1011, humidity: 34}
// 18: {id: 1629676800, temperature: 76.12, pressure: 1010, humidity: 29}
// 19: {id: 1629687600, temperature: 64.81, pressure: 1011, humidity: 46}
// 20: {id: 1629698400, temperature: 57.13, pressure: 1014, humidity: 63}
// 21: {id: 1629709200, temperature: 53.56, pressure: 1015, humidity: 73}
// 22: {id: 1629720000, temperature: 51.73, pressure: 1015, humidity: 79}
// 23: {id: 1629730800, temperature: 54.61, pressure: 1017, humidity: 75}
// 24: {id: 1629741600, temperature: 64.24, pressure: 1016, humidity: 51}
// 25: {id: 1629752400, temperature: 74.5, pressure: 1014, humidity: 33}
// 26: {id: 1629763200, temperature: 78.44, pressure: 1012, humidity: 26}
// 27: {id: 1629774000, temperature: 70.39, pressure: 1013, humidity: 42}
// 28: {id: 1629784800, temperature: 60.49, pressure: 1015, humidity: 65}
// 29: {id: 1629795600, temperature: 55.89, pressure: 1015, humidity: 76}
// 30: {id: 1629806400, temperature: 53.28, pressure: 1016, humidity: 81}
// 31: {id: 1629817200, temperature: 55.89, pressure: 1017, humidity: 73}
// 32: {id: 1629828000, temperature: 69.69, pressure: 1016, humidity: 45}
// 33: {id: 1629838800, temperature: 80.37, pressure: 1014, humidity: 27}
// 34: {id: 1629849600, temperature: 83.41, pressure: 1012, humidity: 21}
// 35: {id: 1629860400, temperature: 72.5, pressure: 1014, humidity: 42}
// 36: {id: 1629871200, temperature: 63.07, pressure: 1016, humidity: 57}
// 37: {id: 1629882000, temperature: 61.09, pressure: 1016, humidity: 58}
// 38: {id: 1629892800, temperature: 56.75, pressure: 1017, humidity: 69}
// 39: {id: 1629903600, temperature: 58.68, pressure: 1018, humidity: 65}
// length: 40
