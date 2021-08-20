 const Search = () => {
   return (
     <div className="row">
       <div className="col-md-6 offset-md-3 search-bar">
        <form>
          <div className="form-group">
            <input className="form-control" placeholder="Enter city"></input>
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