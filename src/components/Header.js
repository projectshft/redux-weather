import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <h1>HEADER</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/pagetwo'}>Page Two</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header