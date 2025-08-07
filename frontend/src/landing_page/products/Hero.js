import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center mt-5 p-3">
        <h1>Zerodha Products</h1>
        <h3 className="text-muted mt-3 fs-4">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-3 mb-5 fs-4">
          Check out our
          <a href="" className="mx-2" style={{ textDecoration: "none" }}>
            investment offerings
            <i class="fa fa-long-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
