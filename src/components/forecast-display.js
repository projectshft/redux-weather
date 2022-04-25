import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCity } from "../actions";
import { useEffect } from "react";
import _ from 'lodash';

const ForecastIndex = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

   // const handleFormSubmit = (data) => {
  //   dispatchEvent(
  //     fetchCity(data)
  //   );
  // }

  function renderCity() {
    if (!_.isEmpty()) {
      <p>Cities</p>
      // return posts.order.map((postID) => (
      //   <li className="list-group-item" key={postID}>
      //     <Link to={`/posts/${postID}`}>{posts.entries[postID].title}</Link>
      //   </li>
      // ));
    }
    return <div>No posts to show</div>;
  }

  return (
    <div>
      <div className='text-xs-right'>
        <form 
        // onSubmit={ handleFormSubmit }
        >
          <div className='form-group'>
            <label>City</label>
            <input
              className='form-control'
              name='city'></input>          
          </div>
          <button className='btn btn-primary' type='submit'>Search</button>
        </form>
      </div>
      <hr></hr>
      <div className='forecast-list'>
        {renderCity()}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return { city: state.city };
}

function mapDispatchToProps(dispatch) {
  return { fetchCity: bindActionCreators(fetchCity, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastIndex);