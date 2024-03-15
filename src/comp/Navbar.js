import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import './Style.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid" id='navbar'>
      <div className='bg-blue-950 flex items-center gap-60' id="sr" style={{height:"28px", paddingLeft:"70px", color:"white"}}><div style={{color:"#0096FF", fontSize:"28px",paddingLeft:"0px"}}><FaSearch /></div></div>
      {/* <Link className="navbar-brand" to="/" >CodingWithMe</Link> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-8">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" id="hom"  to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" id="hom"  to="/">MENS</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about" id="ab" >FOOTWEARS</Link>
          </li>
          <div class="header-logo">

<strong class="logo">
                        <img src="https://magento2demo.bzotech.com/bm_axon/pub/static/frontend/ECG/axon/en_US/images/logo.png"  className="mx auto"  alt="" width="110"/>
                </strong>
                </div>
          <li className="nav-item" >
            <Link className="nav-link d-flex gap-8" to="/service"  id="ser" >SEAMLES</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact"  id="con">WOMEN</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" id="hom"  to="/">PAGES</Link>
          </li>
          <div className='bg-blue-950 flex items-center gap-60' id="sr" style={{height:"0px", paddingRight:"0px", color:"white"}}><div style={{color:"#0096FF", fontSize:"28px",paddingRight:"0px"}}><FaShoppingBasket /></div></div>
         
         
        </ul>
        {/* <form className="d-flex gap-2" role="search">
          
          <button className="btn btn-primary" type="submit">Login</button>
          <button className="btn btn-success" type="submit">Signup</button>
        </form> */}
      </div>
    </div>
  </nav>
  )
}

export default Navbar