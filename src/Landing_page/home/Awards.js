import React from 'react'
import './Awards.css'
function Awards() {
    return (
        <div className='container big mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='/media/images/largestBroker.svg' alt='' />

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
    <li className="col-6">Future and Options</li>
    <li className="col-6">Stocks and IPOs</li>

    <li className="col-6">Commodity Derivatives</li>
    <li className="col-6">Direct Mutual Funds</li>

    <li className="col-6">Currency Derivatives</li>
    <li className="col-6">Bonds and Governance</li>
  </ul>
</div>
<img src='media/images/pressLogos.png' alt=''/>


                </div>

            </div>

        </div>

      );
}

export default Awards;