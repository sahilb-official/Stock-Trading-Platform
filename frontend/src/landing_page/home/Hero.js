import React from 'react';
import {Link } from 'react-router-dom'

function Hero() {
    return (  
        <div className='container mb-10'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                 <h1 className='mt-5'>Invest in everything</h1>
                 <p>online platform to invest in stocks,derivatives,mutual funds ,and more</p>
                <Link class="nav-link active p-2 btn btn-primary fs-5 mb-5" style={{width:"20%" ,margin:"0 auto"}} aria-current="page" to={process.env.REACT_APP_DASHBOARD_URL} target='_blank'>
                       SignUp
                </Link>
            </div>
            
        </div>
    );
}

export default Hero;