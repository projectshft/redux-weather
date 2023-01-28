import DisplayHeader from "./Display-Header";
import SearchBar from "./Search-Bar";

const App = () => {
  return (
    <div className="app container text-center">
      <div className="row">
        <div className="col-8 offset-2">
          <h1 className="m-4">Redux Blog</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-8 offset-2">
        <SearchBar />
        </div>
      </div>

      <div className="row m-0">
        <div className="col-8 offset-2">
          <DisplayHeader />
        </div>
      </div>
    </div>
  );
}
 
export default App;