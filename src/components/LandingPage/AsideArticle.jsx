// react libraries
import React, { Fragment } from 'react';


/**
 * @desc renders article
 * @return article item
*/
const AsideArticle = () => (
  <Fragment>
   <div className="l-ah-sm-card d-flex">
      <figure>
        <img className="img-fluid" src="../imgs/smallblog.png" alt="smallblog image"/>
      </figure>
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
  </Fragment>
);

export default AsideArticle;
