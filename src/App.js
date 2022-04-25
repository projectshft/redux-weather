import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchCity } from './actions';
import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const { register, handleSubmit, errors } = useForm();

  const renderForecast = () => {
    const props = {posts: []};
    

      if (props.posts.length > 0) {
        return props.posts.map((p) => {
          return (
            <tr>
              <td>{p.city}</td>
              <td>{p.temperature}</td>
              <td>{p.pressure}</td>
              <td>{p.humidity}</td>
            </tr>
            // <li className="list-group-item" key={post.id}>
            //   <Link to={`/posts/${post.id}`}>
            //     {post.title}
            //   </Link>
            // </li>
          );
        })
      } else {
        return <div>No posts to show</div>
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

  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  // const handleFormSubmit = (data) => {
  //   debugger;
  //   dispatch(
  //     fetchCity(data)
  //   )
  // }

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

function mapStateToProps(state) {
  console.log('state='+state);
  return { city: state.city };
}

function mapDispatchToProps(dispatch) {
  console.log('dispatch='+dispatch)
  return { fetchCity: bindActionCreators(fetchCity, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
