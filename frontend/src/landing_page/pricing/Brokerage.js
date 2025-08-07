import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4 '>
                    <a><h3 className='fs-5' style={{textDecoration:"none"}}>Brokerage calculator</h3></a>
                    <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"16px"}} className='text-muted'>
                        <li>Call & Trade and RMS auto-squareoff:additional charges of ₹50 + GST per order</li>
                        <li>Digital contract notes will be sent via e-mail</li>
                        <li>Physical copies of contract notes,if required,shall be charged ₹20per contract note.courier charges apply</li>
                        <li>For NRI account (non-PIS) ,0.5% or ₹100 per executed order for equity (whichever is lower) </li>
                        <li>For NRI account (PIS) ,0.5% or ₹200 per executed order for equity (whichever is lower)</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a><h3 className='fs-5' style={{textDecoration:"none"}}>List of charges</h3></a>
                </div>

            </div>
        </div>
     );
}

export default Brokerage;