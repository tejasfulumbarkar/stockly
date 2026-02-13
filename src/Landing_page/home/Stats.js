import React from 'react'
import './Stats.css'

function Stats() {
    return (

        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='mt-5 mb-5'> 
                        Trust with confidence
                    </h1>

                    <div className='d-flex flex-column justify-content-evenly'>

                        <div >
                            <h4>Customer-first always</h4>
                            <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                        </div>
                                  <div >
                            <h4>Customer-first always</h4>
                            <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                        </div>
                                  <div >
                            <h4>Customer-first always</h4>
                            <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                        </div>

                    </div>

                </div>
                <div className='col-6'>
          <img id='eco_image' src='media/images/ecosystem.png' alt='' />
                </div>

            </div>

        </div>

      );
}

export default Stats;