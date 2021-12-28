import "./ArrowsCarousel.css";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import React from "react";

interface SliderArrowProps {
  onClick?: () => void;
}

export const SliderArrowPrev: React.FC<SliderArrowProps> = ({ onClick }) => {
  return (
    <div className="slider-arrow-prev" onClick={onClick}>
      <MdKeyboardArrowLeft className="icon-arrow" />
    </div>
  );
};

export const SliderArrowNext: React.FC<SliderArrowProps> = ({ onClick }) => {
  return (
    <div className="slider-arrow-next" onClick={onClick}>
      <MdKeyboardArrowRight className="icon-arrow" />
    </div>
  );
};
