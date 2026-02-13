import React from 'react'
import './Hero.css'
function Hero() {
    return (

        <div className='container p-5'>
            <div className='row text-center'>
               <img src='media/images/stocklyhero.png' alt='' className='mb-5'></img>
        <h1 className='mt-5'> Invest in Everything</h1>
        <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='btn btn-primary my-btn'>Sign Up for free</button>
            </div>

        </div>

      );
}

export default Hero;