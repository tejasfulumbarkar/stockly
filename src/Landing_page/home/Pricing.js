import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import './Pricing.css'

function Pricing() {
    return (
        <div className='container  pricing_box'>
            <div className='row'>
                <div className='col-5'>
                    <h1 className='mb-3'>
                        Unbeatable pricing
                    </h1>
                    <p className='fs-4'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a  className='fs-5' id='see_pricing_link' href='#'>See Pricing <MdOutlineArrowRightAlt /></a>


                </div>
                <div className='col-7'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4 text-center'>
                                <img className='pricingimages' src='media/images/Pricing0.svg' alt=''/>
                                <p className='para1'>Free Account <br></br>opening</p>
                            </div>
                            <div className='col-4 text-center'>
                                <img className='pricingimages' src='media/images/PricingEquity.svg' alt=''/>
                                <p className='para1'> Free equity delivery
and direct mutual funds</p>
                            </div>
                            <div className='col-4 text-center'>
                       <img className='pricingimages' src='media/images/intradayTrades.svg' alt=''/>
                       <p className='para1'>Intraday and <br/>
F&O
</p>

                            </div>

                        </div>

                    </div>


                </div>

            </div>
            
        </div>

      );
}

export default Pricing ;