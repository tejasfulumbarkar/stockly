import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";



import './Footer.css'

function Footer() {
    return ( 
        <div className='container-fluid pt-5 footer_box'>
            <div className='row text-center '>
                <div className='col'>
                 <img  id='foot_logo' src='media/images/stocklylgo.png' alt=''/> 
                
                  
                </div>
                 
                <div className='col-2 foot-cols'>
                  <h4 className='ps-0 mb-5'>Account</h4>,
                  <a  className='fs-5' id='see_pricing_link' href='#'>Open Demat Account</a><br></br>
                  <a  className='fs-5' id='see_pricing_link' href='#'>Minor demat account</a><br></br>
                  <a  className='fs-5' id='see_pricing_link' href='#'><a  className='fs-5' id='see_pricing_link' href='#'>Fund Transfer</a></a>

                </div>
                <div className='col-2 foot-cols'>
                  <h4 className='mb-5'>Support </h4>
                  <a  className='fs-5' id='see_pricing_link' href='#'>Contact us</a><br></br>
                  <a  className='fs-5' id='see_pricing_link' href='#'>Support Portal</a><br></br>
                  <a  className='fs-5' id='see_pricing_link' href='#'><a  className='fs-5' id='see_pricing_link' href='#'>Circular</a></a>
                     
                </div>
                <div className='col-2 foot-cols'>
                  <h4 className='mb-5'>Company </h4>
                  <a  className='fs-5' id='see_pricing_link' href='#'>About</a><br></br>
                  <a  className='fs-5' id='see_pricing_link' href='#'>Philosophy</a><br></br>
                  <a  className='fs-5' id='see_pricing_link' href='#'><a  className='fs-5' id='see_pricing_link' href='#'>Carrers</a></a>
                     
                </div>
                <div className='col-2 foot-cols'>
                  <h4 className='mb-5'>Quick Links</h4>
                  <a  className='fs-5' id='see_pricing_link' href='#'>Upcoming IPOs</a><br></br>
                  <a  className='fs-5' id='see_pricing_link' href='#'> Brokerage Charges</a> <br></br>
                  <a  className='fs-5' id='see_pricing_link' href='#'><a  className='fs-5' id='see_pricing_link' href='#'>Markets</a></a>
                     
                </div>
            </div>


            <div className='row text-center'>
                <div>
                <h2 id='foot-h2'>Follow Us On</h2>
                <FaInstagram className='iconig me-3'/>
                <FaXTwitter className='iconig me-3'/>
                <CiLinkedin className='iconig me-3' />
                </div>

            </div>
            
                
                

            

        </div>
     );
}

export default Footer;