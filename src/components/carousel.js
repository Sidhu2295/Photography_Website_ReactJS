import React from "react";
import Flickity from "react-flickity-component";
import "./carousel.css";

function Carousel() {
    const flickityOptions = {
    initialIndex: 3
}

  return (
  <div class='carousel'>
  <div class='carousel-title'>
    <h4>PORTFOLIO HIGHLIGHTS</h4>
  </div>
  <div class='carousel-container'>
    <Flickity
        options={flickityOptions}
        >
          <img src="/images/img-3.jpg" />
          <img src="/images/img-22.jpg" />
          <img src="/images/img-5.jpg" />
          <img src="/images/img-16.jpg" />
          <img src="/images/img-7.jpg" />
          <img src="/images/img-17.jpg" />
          <img src="/images/img-2.jpg" />
          <img src="/images/img-18.jpg" />
    </Flickity>
  </div>
  </div>
  );
}

export default Carousel;