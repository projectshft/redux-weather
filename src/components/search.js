 import { React, useState } from 'react';
 import { useDispatch } from 'react-redux';
 import { fetchResult } from '../actions'
 
 const Search = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      dispatch(fetchResult(query));
      e.preventDefault();
    }

   return (
     <div className="row">
       <div className="col-md-6 offset-md-3 search-bar">

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <input className="form-control"
             placeholder="Enter city" 
             onChange={e => setQuery(e.target.value)}>
             </input>

          </div>

          <button className="btn btn-primary search-btn" type="submit">
            Submit
          </button>
        </form>
        <hr></hr>
       </div>
     </div>      
   )
 }

 export default Search;