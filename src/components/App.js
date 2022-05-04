import Cities from "./Cities";
import SearchForm from "./SearchForm";
import './App';

const App = () => {
    return (
        <div className="App row justify-content-center">
            <div className="col-10">
                <SearchForm />
                <Cities />
            </div>
        </div>
    );
}

export default App;