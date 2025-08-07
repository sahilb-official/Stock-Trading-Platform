import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return (  
        <div className='container'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className='col-4 p-3 mt-5'>
                    <img src="media\images\smallcaseLogo.png" style={{width:"35%"}}/>
                    <p className='text-small text-muted'>Thematic investment platform </p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media\images\streakLogo.png" style={{width:"25%"}}/>
                    <p className='text-small text-muted'>Algo and Strategy platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media\images\sensibullLogo.svg" style={{width:"40%"}}/>
                    <p className='text-small text-muted'>option trading platform</p>
                </div>

                 <div className='col-4 p-3 mt-5'>
                    <img src="media\images\zerodhaFundhouse.png" style={{width:"40%"}}/>
                    <p className='text-small text-muted'>Asset management </p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media\images\goldenpiLogo.png"/>
                    <p className='text-small text-muted'>Bonds trading platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media\images\dittoLogo.png" style={{width:"30%"}}/>
                    <p className='text-small text-muted'>Insurance</p>
                </div>
                 <Link class="nav-link active p-2 btn btn-primary fs-5 mb-5" style={{width:"20%" ,margin:"0 auto"}} aria-current="page" to={process.env.REACT_APP_DASHBOARD_URL} target='_blank'>
                        SignUp
                 </Link>
            </div>
            
        </div>
    );
}

export default Universe;