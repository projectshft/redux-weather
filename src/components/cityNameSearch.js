import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchForecastAction } from '../features/forecastSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const cityNameSchema = yup.object({
  city: yup.string().required('You must provide a city').max(20)
})


const CityNameSearch = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(cityNameSchema)
  });

  const formRef = useRef(null);

  const dispatch = useDispatch();
  
  const handleReset = () => {
    formRef.current.reset();
  }
  const handleCitySubmit = (data) => {
    dispatch(fetchForecastAction(data.city));
    handleReset();
  };
 
  return (
      <Form ref={formRef} className="d-flex" onSubmit={handleSubmit(handleCitySubmit)}>
        <Form.Control
          type="search"
          placeholder="Get a five-day forecast in your favorite cities"
          {...register("city")}>
        </Form.Control>
        {errors.city?.message}
        <div></div>
        <Button variant="dark" type="submit">Submit</Button>
      </Form>
      
  )
}

export default CityNameSearch