import Cities from "./Cities";
import SearchForm from "./SearchForm";

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