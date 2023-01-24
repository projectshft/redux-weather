//Header component function. Will return and display Redux Weather at the top.
const Header = (props) => {
  return (
    <div>
      <div className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Redux Weather</h1>
        </div>
      </div>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default Header;