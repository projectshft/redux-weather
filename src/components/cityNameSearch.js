import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { declareCityName } from '../features/cityNameSlice';

const cityNameSchema = yup.object({
  cityName: yup.string().required('You must provide a city').max(20)
})


const CityNameSearch = (props) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(cityNameSchema)
  });


  const dispatch = useDispatch();

  const handleCitySubmit = (data) => {
    debugger;
    dispatch(
      declareCityName(data.cityName, () => {
        reset();
      })
      )
  }

  return (
      <Form className="d-flex" onSubmit={handleSubmit(handleCitySubmit)}>
        <Form.Control
          type="search"
          placeholder="Get a five-day forecast in your favorite cities"
          {...register("cityName")}>
        </Form.Control>
        <Button variant="dark" type="submit">Submit</Button>
        {errors.cityName?.message}
      </Form>
      
  )
}

export default CityNameSearch