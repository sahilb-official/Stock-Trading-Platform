import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container" style={{marginBottom:"2.5rem",marginTop:"2.5rem"}}>
      <div className="row align-items-center">

        <div className="col-6 p-5 mt-5 d-align-items-center">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <a href={learnMore} >
            Learn More
            </a>
          </div>
        </div>

        <div className="col-6">
          <img src={imageURL} style={{width:"95%"}}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
