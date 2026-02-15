import React from 'react'
import {Link} from 'react-router-dom'
import './openAccount.css'

function NotFound() {
    return ( 
        <div className='container open_acc_box '>
            <div className='row text-center'>
                <h1 className='mb-3'>404 NOT FOUND</h1>
                <p className='fs-5 mb-4'>Sorry but  this page does not exist !</p>
                <Link to="/" className="btn my-btnn" role="button">Go Home</Link>

            </div>

        </div>

        
    );
}

export default NotFound ;