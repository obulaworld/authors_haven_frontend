// react libraries
import React from 'react';

// third party libraries
import PropTypes from 'prop-types';

/**
 * @desc renders figure image
 * @return image
*/
const FeatureImage = ({
  src,
  className,
  alt
}) => (
  <figure>
  <img
  className={className}
  src={src}
  alt={alt}/>
  </figure>
);

FeatureImage.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default FeatureImage;
