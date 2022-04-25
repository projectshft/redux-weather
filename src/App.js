import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCity } from './actions';
import { useForm } from "react-hook-form";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './App.css';

function App() {
  const city = useSelector((state) => state.city);
  const postSchema = Yup.object().shape({
    city: Yup.string().required().min(3).max(10)
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(postSchema)
  });
  const dispatch = useDispatch();

  const renderForecast = () => {
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
        return <div></div>
      } 
  }

  const renderCity = () => {
    return (
      <div>
        <table>
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
