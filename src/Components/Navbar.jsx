// import React  from 'react'
// import { NavLink } from 'react-router-dom';
// //  import {useSelector} from "react-redux";



// const Navbar = ({ cartItemsCount }) => {

//     return (
//           <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm header d-flex align-items-center fixed-top" >
//             <div class="container-fluid ">
//                 <NavLink class="navbar-brand fw-bold fs-4" to="/"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart-app" /></NavLink>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
//                         <li class="nav-item">
//                             <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
//                         </li>
//                         <li class="nav-item">
//                             <NavLink class="nav-link" to="/products">Products</NavLink>
//                         </li>

//                         <li class="nav-item">
//                             <NavLink class="nav-link" to="/pricing">Pricing</NavLink>
//                         </li>

//                         <li class="nav-item">
//                             <NavLink class="nav-link" to="/contact">Contact-us</NavLink>
//                         </li>
                      
                       
//                     </ul>
//                 <div className="buttons">
//                     <NavLink to="/login" className="btn btn-outline-dark">
//                         <i className='fa fa-sign-in me-1'></i>Login
//                     </NavLink>
//                     <NavLink to="/register" className="btn btn-outline-dark ms-2">
//                         <i className='fa fa-user-plus me-1'></i>Register
//                     </NavLink>
//                     <NavLink to="/cart" className="btn btn-outline-dark ms-2">
//                         <i className='fa fa-shopping-cart me-1'></i>Cart({cartItemsCount})
//                     </NavLink>
//                 </div>
//                 </div>
//             </div>
//         </nav>

//     )
// }
// export default Navbar;


import React from 'react';
import { NavLink } from 'react-router-dom';
//  import Cart from './Cart';
// import React, { useContext } from "react";
// import { CartContext } from "./Cart";
const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm header d-flex align-items-center fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart-app" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact-us</NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i>Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"></i>Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i>
              Cart(0)
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
