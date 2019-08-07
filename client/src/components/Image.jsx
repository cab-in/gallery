import React from 'react';
import style from '../style.css';

const Image = (props) => {
  const {
    imageurl,
    imageClickHandler,
    imageHoverHandler,
    imageUnHoverHandler,
    imageid,
    hoverClass,
  } = props;

  return <img onClick={ () => { imageClickHandler(imageid) } } onMouseEnter={ imageHoverHandler && (() => imageHoverHandler(imageid)) } onMouseLeave={ imageUnHoverHandler && (() => imageUnHoverHandler()) } className={style.galleryImage + ' ' + hoverClass} alt="listing" src={imageurl} />;
};

export default Image;
