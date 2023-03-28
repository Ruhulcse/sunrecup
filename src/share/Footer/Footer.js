import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="logo d-flex justify-content-center">
        <img src={logo} alt=""  />
        
        </div>
        <div className="social d-flex justify-content-center mt-4">
           <a href="https://www.instagram.com/sunrecup.be/?igshid=YmMyMTA2M2Y%3D" style={{textDecoration:'none'}}> <FontAwesomeIcon icon={faInstagram} style={{color:"#ffffff", fontSize:'40px'}}/> </a>
        <a href="https://www.facebook.com/profile.php?id=100086050427693" style={{textDecoration:'none'}}> <FontAwesomeIcon icon={faFacebookSquare} style={{color:"#ffffff", fontSize:'40px', marginLeft:'10px'}} /> </a>
        </div>
      </div>
    </div>
  )
}

export default Footer