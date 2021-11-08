const Header = (props) => {
  return (
    <div>
      <div className='bg-light p-5 rounded-lg text-center'>
        <div className='container'>
          <h1 className='display-5'>Redux Weather</h1>
        </div>
      </div>
      <div className='container'>
        {props.children}
      </div>
    </div>
  )
};

export default Header;