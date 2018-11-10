// react libraries
import React from 'react';


/**
 * @desc renders Carousel item
 * @return carousel item
*/
const CarouselItem = () => (
  <div>
  <div>
    <figure>
      <img className="img-fluid" src="/images/mdblog.png" alt="mdblog image"/>
    </figure>
  </div>
  <figcaption>
    <h5>The origin of photography,..</h5>
    <p>I just decided that I was going to click
    everywhere in order to get around this because...</p>
    <div className="details-sm d-flex justify-content-flex-start align-items-center">
      <div>
        <div className="username">Mindsworth</div>
      </div>
      <div className="notice d-flex justify-content-flex-start align-items-center">
        <div className="date">Nov 5</div>
        <div className="read-time">5min read</div>
      </div>
    </div>
  </figcaption>
</div>
);

export default CarouselItem;
