import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { getData } from "../Actions/Index";


let citySchema = Yup.object({'City': Yup.string().required()}).required();;

const Search = (props) => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(citySchema)
  });

  const dispatch = useDispatch();

  // const handleFormSubmit = (data) => console.log(data);

  const handleFormSubmit = (data) => {
    dispatch(
      getData(data),
    )
  }

  return (
    <div className="row offset-md-2 col-md-8">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="input-group mb-3">
          <input 
            placeholder='"City"'
            className="form-control border border-dark" 
            {... register('City')}>                 
          </input>
          
          <input type='submit' className="btn btn-outline-dark" />
        </div>
        <p className="text-danger">{errors.City?.message}</p>
      </form>
    </div>
  )

};

export default Search;

