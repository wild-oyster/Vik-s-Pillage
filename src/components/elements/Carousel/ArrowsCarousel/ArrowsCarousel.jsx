import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import './ArrowsCarousel.css';

export const SliderArrowPrev = props => {
  const { onClick } = props;
  return (
    <div className='slider-arrow-prev' type='button' onClick={onClick}>
      <MdKeyboardArrowLeft className="icon-arrow" />
    </div>
  );
};

export const SliderArrowNext = props => {
  const { onClick } = props;
  return (
    <div className='slider-arrow-next' type='button' onClick={onClick}>
      <MdKeyboardArrowRight className="icon-arrow" />
    </div>
  );
};
