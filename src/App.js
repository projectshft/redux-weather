import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, connect, useSelector } from 'react-redux';
import { bindActionCreators } from "redux";
import { useEffect } from 'react';
import { fetchCity } from './actions';
import { useForm } from "react-hook-form";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import './App.css';

function App() {
  const city = useSelector((state) => state.city);
  const { register, handleSubmit, errors } = useForm();
  console.log(city);

  useEffect(() => {
    dispatch(fetchCity());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderForecast = () => {
    // const city = useSelector({city});
    console.log(city);
      if (city.length > 0) {
        const temp = city.map((p) => {
          return p.temperature;
        })
        const pres = city.map((p) => {
          return p.pressure;
        })
        const humi = city.map((p) => {
          return p.humidity;
        })

        return (
          <tr>
            <td>City</td>
            <td>
              <Sparklines data={temp}>
                <SparklinesLine color="red"/>
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
            </td>
            <td>
              <Sparklines data={pres}>
                <SparklinesLine color="blue"/>
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
            </td>
            <td>
              <Sparklines data={humi}>
                <SparklinesLine color="green"/>
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
            </td>
          </tr>
        );
      } else {
        return <div>No posts to show</div>
      } 
  }

  const renderCity = () => {
    return (
      <div>
        <table width="1000px">
          <thead> 
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </thead>
          <tbody>
            {renderForecast()}
          </tbody>
        </table>
      </div>
    )
  }

  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    dispatch(
      fetchCity(data)
    )
  }

  return (
    <div>
      <div className='text-xs-right'>
        <form 
        onSubmit={ handleSubmit(handleFormSubmit) }
        >
          <div className='form-group'>
            <label>City</label>
            <input
              className='form-control'
              name='city'
              ref={register}></input>          
          </div>
          <button className='btn btn-primary' type='submit'>Search</button>
        </form>
      </div>
      <hr></hr>
      <div className='forecast-list'>
        {renderCity()}
      </div>
    </div>
  );
}

// function mapStateToProps(state) {
//   console.log('state='+state);
//   return { city: state.city };
// }

// function mapDispatchToProps(dispatch) {
//   console.log('dispatch='+dispatch)
//   return { fetchCity: bindActionCreators(fetchCity, dispatch) }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
