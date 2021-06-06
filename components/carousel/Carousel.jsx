import React from "react";

const Carousel = () => {
  return (
    <div className="h-full">
      <div id="slider" className="">
        <figure>
          <img id="carousel_image" className="" src="/img/carousel-2.jpg" />
          <img id="carousel_image" className="" src="/img/carousel-1.jpg" />
          <img id="carousel_image" className="" src="/img/carousel-3.jpg" />
          <img id="carousel_image" className="" src="/img/carousel-4.jpg" />
        </figure>
      </div>
    </div>
  );
};

export default Carousel;
