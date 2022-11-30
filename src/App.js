import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCity } from './actions';
import { useForm } from "react-hook-form";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './App.css';

function App() {
  const city = useSelector(state => state.city);
  const postSchema = Yup.object().shape({
    city: Yup.string().required().min(3)
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(postSchema)
  });
  const dispatch = useDispatch();

  const renderForecast = () => {
      if (city.length > 0) {

        return city.map((p) => (
          <tr>
            <td>{p.city}</td>
            <td><Sparklines data={p.temperature}>
              <SparklinesLine color="red"/>
              <SparklinesReferenceLine type="avg" />
              </Sparklines>
            </td>
            <td><Sparklines data={p.pressure}>
              <SparklinesLine color="green"/>
              <SparklinesReferenceLine type="avg" />
              </Sparklines>
            </td>
            <td><Sparklines data={p.humidity}>
              <SparklinesLine color="yellow"/>
              <SparklinesReferenceLine type="avg" />
              </Sparklines>
            </td>
          </tr>
        ));
      } else {
        return <div>No results</div>
      } 
  }

  const renderCity = () => {
    return (
      <div className='city-display'>
        <table className='city-table'>
          <thead>
            <tr> 
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {renderForecast()}
          </tbody>
        </table>
      </div>
    )
  }

  const handleFormSubmit = (data) => {
    dispatch(
      fetchCity(data)
    )
  }

  return (
    <div className='container'>
      <div className='text-xs-right'>
        <center><h1>Weather Forecast</h1></center>
        <form 
        onSubmit={ handleSubmit(handleFormSubmit) }
        >
          <div className='form-group'>
            <label>City</label>
            <input
              className='form-control'
              name='city'
              ref={register}></input>
              {errors.city?.message}         
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

export default App;
