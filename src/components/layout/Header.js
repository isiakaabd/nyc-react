import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../img/logo.png';
//import '../css/nav.css'

// Functional Component

const Header = props =>{

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="/"><img src={logo} alt="Naija Yellow Catalogue Logo" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" />
  <div className=" nav-flex collapse navbar-collapse" id="navbarNav">
    <div className="nav-item-1 mr-auto">
      <ul>
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><a href="./contents/pricing.html">Adverts</a></li>    
        <li><a href="./contents/contact-us.html">Contact</a></li>
      </ul>
    </div>
    <div className="nav-item-2">
      <ul>
        <li><Link to="/login">Login / Register</Link></li>
        <li><a href="./contents/sign-up.html" className="add-btn">+ Add Listings</a></li>
      </ul>
    </div>
  </div>
</nav>






{/* Used Jsx styling here, was trying to identify a problem */}


<style jsx>{`

@import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Ubuntu&display=swap');



/* Navbar Styling */
nav {
    background: #111111;
    position: sticky;
    background: rgba(0, 0, 0, 0.96);
    font-family: 'Ubuntu', sans-serif;
    width: 100%;
  }
  
  nav .navbar-brand img {
    max-width: 230px;
    max-height: 230px;
    top: 15px;
    margin-right: 300px;
  }
  
  nav .nav-item-1 ul {
    display: flex;
    justify-content: space-between;
    top: 25px;
  }
  
  nav .nav-item-1 li {
    list-style-type: none;
    text-decoration: none;
  }
  
  nav .nav-item-1 li a {
    position: relative;
    top: 10px;
    color: #ffffff;
    padding: 20px;
    font-size: 15px;
    margin: 15px auto;
    text-decoration: none;
  } 
  
  nav .nav-item-1 li a:hover {
    color: #EBBA32;
  }
  
  nav .nav-item-1 .active{
    color: #EBBA32;
  }
  
  nav .nav-item-2 ul{
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  
  nav .nav-item-2 li {
    list-style-type: none;
  }
  
  nav .nav-item-2 a {
    position: relative;
    top: 10px;
    padding: 8px;
    font-size: 15px;
    color: #ffffff;
    text-decoration: none;
  }
  
  nav .nav-item-2 a:hover {
    color: #EBBA32 !important;
  }
  
  nav .nav-item-2 .add-btn {
    position: relative;
    top: 10px;
    background: #EBBA32;
    padding: 10px 20px;
    border-radius: 5px;
    color: #ffffff;
  }
  
  nav .nav-item-2 .add-btn:hover {
    color: #ffffff;
  } 
  


/* RESPONSIVENESS*/
@media (max-width:1024px) {

    /* HAMBURGER MENU */
    #navbar .content-2 {
      height: 300px;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 10;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      background: #000000;
      color: #EBBA32;
      transition: top 1s ease;
      padding: 25px 300px !important;
      margin-top: 70px;
      display: none;
    }
  
    #navbar .content-2 .nav-item-1 ul {
      display: flex;
      flex-direction: column;
    }
  
    #navbar .content-2 .nav-item-2 ul {
      display: flex;
      flex-direction: column;
    }
  
    #navbar .content-2 li {
      padding: 12px;
    }
  
    #navbar .content-2 .closeMenu {
      display: block;
      position: absolute;
      top: 20px;
      right: 30px;
    }
  
    #navbar .content-2 .closeMenu i {
      color: #EBBA32;
    }
  
    #navbar .content-2 .openMenu {
        display: block;
        position: absolute;
        top: 20px;
        right: 30px;
    }

}




@media (max-width:768px){

    #navbar .content-2 {
        height: 300px;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 10;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background: #000000;
        color: #EBBA32;
        transition: top 1s ease;
        padding: 25px 300px;
        margin-top: 70px;
        display: none;
      }
    
      #navbar .content-2 .nav-item-1 ul {
        display: flex;
        flex-direction: column;
      }
    
      #navbar .content-2 .nav-item-2 ul {
        display: flex;
        flex-direction: column;
      }
    
      #navbar .content-2 li {
        padding: 12px;
      }
    
      #navbar .content-2 .closeMenu {
        display: inline;
        position: absolute;
        top: 20px;
        right: 30px;
      }
    
      #navbar .content-2 .closeMenu i {
        color: #EBBA32;
      }
    
      #navbar .content-2 .openMenu {
          display: block;
          position: absolute;
          top: 20px;
          right: 30px;
      }     
      
      footer {
        margin: 150px 0 0 0;
      }

}

@media(max-width:375px) {
    nav .navbar-brand img {
      max-width: 200px;
      max-height: 200px;
      top: 15px;  
      margin-right: 70px;
    }
    
    nav .nav-item-2 .add-btn {
    position: relative;
    top: 10px;
    background: #EBBA32;
    padding: 10px 7px;
    border-radius: 5px;
    color: #ffffff;
    }

}
`}
</style>
</div>








    );
}

export default Header;

