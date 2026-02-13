import React from 'react'
import './Education.css'
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Education() {
    return (

        <div className='container education_box '>
            <div className='row '>
                <div className='col-6'>
                 <img src='media/images/education.svg' alt=''/>
                </div>
                <div className='col-6'>
                    <div className='d-flex flex-column justify-content-evenly'>
                        <div className='d-flex flex-column justify-content-evenly pt-2 pb-5 '>
                            <h1>Free and open market education</h1>
                            <p className='mt-2 fs-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                            <a  className='fs-5' id='see_pricing_link' href='#'>Varsity <MdOutlineArrowRightAlt /></a>
                            

                        </div>
                         <div className='d-flex flex-column justify-content-evenly '>
                            <p className='fs-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
      );
}

export default Education;