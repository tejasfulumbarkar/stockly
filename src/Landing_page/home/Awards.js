import React from 'react'
import './Awards.css'

import champion from "../../assets/Champion.json";
import Lottie from "lottie-react";
function Awards() {
    return (
        <div className='container big mt-5'>
            <div className='row gx-5'>
                <div className='col-6 gx-4'>
                    <div className='tropy_box'>
                    {/* <img src='/media/images/largestBroker.svg' alt='' /> */}
                    <Lottie animationData={champion} />
                    </div>
                </div>
                <div className='col-6'>
                    <h1>
                        Largest Stock Broker in India
                    </h1>
                    <p className='fs-5'>
                        2+ million Stockly clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :
                    </p>
                    <div className="container mt-5">
  <ul className="big-dots row">
    <li className="col-6 fs-5">Future and Options</li>
    <li className="col-6 fs-5">Stocks and IPOs</li>

    <li className="col-6 fs-5">Commodity Derivatives</li>
    <li className="col-6 fs-5">Direct Mutual Funds</li>

    <li className="col-6 fs-5">Currency Derivatives</li>
    <li className="col-6 fs-5">Bonds and Governance</li>
  </ul>
</div>
<img src='media/images/pressLogos.png' alt=''/>


                </div>

            </div>

        </div>

      );
}

export default Awards;