import React from 'react';
import { Link } from 'react-router-dom';
function OpenAccount() {
    return ( 
        <div className='container mb-10 mt-5'>
            <div className='row text-center'>
                 <h1 className='mt-5'>Open a Zerodha account</h1>
                 <p>Modern platform and apps,₹0 investment,and flat ₹20 intraday and F&O trades</p>
                <Link class="nav-link active p-2 btn btn-primary fs-5 mb-5" style={{width:"20%" ,margin:"0 auto"}} aria-current="page" to={process.env.REACT_APP_DASHBOARD_URL} target='_blank'>
                  SignUp Now
                </Link>
            </div>
            
        </div>
     );
}

export default OpenAccount;