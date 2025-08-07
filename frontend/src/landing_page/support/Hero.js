import React from 'react';

function Hero() {
    return ( 
       <section className='container-fluid' id='supportHero'>
            <div className='p-5 ' id='supportWrapper'>
                <h5>Support portal</h5>
                <a href=''>Track tickets</a>

            </div>

            <div className='row px-4 ps-5 pe-3'>
                <div className='col-md-6  ps-5 '>
                    <h1 className='fs-3 py-4'>Search for ans answer orbrowse help topics to create a ticket</h1>
                    <input className='py-4 mb-4' placeholder='Eg. how do I activate F&O'/>
                     <br/>
                    <a href='' className='ms-0'>Track account opening</a>
                    <a href='' className='ms-3'>Track segment activation</a>
                     <br/>
                    <a href='' className='ms-3'>Intraday margins</a>
                    <a href='' className='ms-3'>Kite user manual</a>
                </div>
                <div className='col-md-6 ps-5  '>
                    <h1 className='fs-3 py-4'>Featured</h1>
                    <ol>
                        <li><a href=''>Current takovers and Delisting - Janunary 2024</a></li>
                        <li><a href=''>Latest Intraday leverages -MIS & CO</a></li>
                    </ol>
                    
                   
                    
                </div>

            </div>
       </section>
    );
}

export default Hero;