import React from "react";
import { useNavigate  } from "react-router-dom";
export const Header = () => {

    
    let navigate=useNavigate();
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Shoping Cart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active" onClick={()=> navigate('/')}>
            <button
         
         className="btn btn-info"
       >
       Home
       </button>

              {/* <NavLink to="/">Home</NavLink> */}
            </li>

            <li className="nav-item" onClick={()=> navigate('/cart')}>
            <button
         
         className="btn btn-info"
       >
         Go to cart
       </button>

              {/* <NavLink to="/about">About</NavLink> */}
            </li>
            <li className="nav-item" onClick={()=> navigate('/description')}>
             <button
         
         className="btn btn-info"
       >
         Description
       </button>
       <br></br>
            </li>
            <li><button className="btn btn-outline-warning" onClick={()=>navigate('/men-clothing')}> Men's Clothing </button></li>
            <li><button className="btn btn-outline-warning" onClick={()=>navigate('/jewellery')}> Jewellery </button></li>
            <li><button className="btn btn-outline-warning" onClick={()=>navigate('/electronics')}> Electronics </button></li>
            <li><button className="btn btn-outline-warning" onClick={()=>navigate('/women-clothing')}> Women's Clothing </button></li>
           
          </ul>
        </div>
      </nav>
    </>
  );
};
