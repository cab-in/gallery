import React from 'react';
import Image from './Image';
import style from '../style.css';

const Gallery = (props) => {
  const { imageClickHandler, imageHoverHandler, imageUnHoverHandler } = props;
  return props.images.map((image, index) => {
    const { imageid, imageurl, caption, verified, hoverClass } = image;
    const cssId = props.id || style.galleryImage + index;
    return (index < 4) ? (
      <div id={cssId}>
        <Image
          imageUnHoverHandler={imageUnHoverHandler}
          imageHoverHandler={imageHoverHandler}
          imageClickHandler={imageClickHandler}
          caption={caption}
          imageid={imageid}
          imageurl={imageurl}
          verified={verified}
          hoverClass={hoverClass}
        />
      </div>
    ) : (
      null
    );
  });
};

export default Gallery;
