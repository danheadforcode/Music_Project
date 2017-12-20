/**
 * Component that lists all Posts
 */
import React from "react";
import { Link } from "react-router";
// import bg from '../assets/NIC_0713.jpg'

class Header extends React.Component {
  render = () => {
    return (
      <section className="hero is-small is-dark">
       <div className="hero-head">
        <header className="navbar">
          <div className="container">
            <div className="navbar-menu" id="navbarMenu">
             <div className="navbar-start"> 
              <Link to="/" className="navbar-item">
                <span>  
                  Home
                </span>  
              </Link>    
              <Link to="/products" className="navbar-item">
                <span>Products</span>
              </Link>
             </div> 
            </div>
          </div>
        </header>
        {/* <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">
              Dan_Is_Me
            </h1>
            <br/>
            <div className="subtitle">
              Productions
            </div>
          </div>
        </div> */}
        {/*  commented out the code for the big header */}
      </div> 
    </section>
  );
};
}

export default Header;
