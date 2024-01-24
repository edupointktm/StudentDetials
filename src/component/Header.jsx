import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#"><span className='fs-3 text-danger'>NOV</span> 1 </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/course">Course</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/std_summary">Student</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        
       
      
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Header