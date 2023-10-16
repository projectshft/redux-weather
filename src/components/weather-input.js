export default function weatherInput () {
  const handleWeatherSubmit = (event) => {
    event.preventDefault();
    console.log('Click!');
  }

  return (
  <div className = "text-center">
    <form onSubmit={handleWeatherSubmit}>
      <input name = "weatherInput" type = "text" placeholder = "Enter a city"></input>
    <button className = "ms-3 btn btn-primary">Search Weather</button>
    </form>
    </div>)
}