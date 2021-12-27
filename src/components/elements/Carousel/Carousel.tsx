import "./Carousel.css";

import {
  SliderArrowNext,
  SliderArrowPrev,
} from "./ArrowsCarousel/ArrowsCarousel";

import CardProfile from "./CardProfile/CardProfile";
import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import { carouselSettings } from "constant/config";

const Carousel = () => {
  const nicolas = {
    id: "1",
    name: "Nicolas",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Nicolas le souriant rie a chaque instant son rire resonne dans toute les eglise dès qu’il trouve un chretien femme ou enfant il aime leur graver un sourire comme le sien avec sa dague pour qu’ils puissent se rejouir enssemble de la destruction de leurs foyer",
  };

  const maxime = {
    id: "2",
    name: "Maxime",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Maxime l’éveiller on dit de lui qu’il est capable des pires actes durant son sommeil ses pulsion sont tellement intense que somnolant il pille et attaque ses voisin et s’approprie leur femmes",
  };

  const mus = {
    id: "3",
    name: "Mustafa",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Mustapha Ragnarsson, dit « Mus le Désossé » (vieux norrois : Mus inn Beinlausi), est un chefs vikings qui à dirigé la conquête du Danelaw",
  };

  const will = {
    id: "4",
    name: "Will",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Will Ier, surnommé « dague sanglante » (vieux norrois Will blóðöx Haraldsson, norvégien Will Blodøks), fut le second roi de Norvège, reputé pour son apät du gain sans égale",
  };

  const xavier = {
    id: "5",
    name: "Xavier",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Xavier le gris est un jarl dominant pillant et brulant tout sur son sillage on le surnomme ainsi car il se baigne dans les cendres des maisons brulées et se délecte de la frayeur des chrétiens victimes de ses vices",
  };

  const floflo = {
    id: "6",
    name: "Floflo",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Florent le conquerant si vous vous demandez pourquoi  vous ne le connaisser pas c’est surment car il ne n’a encore croiser à votre sœur avec sa branche d’ygdrasil capable d’enfoncer les portes du valhalla de quiconque ose croiser son regard",
  };

  return (
    <div className="carousel">
      <Slider
        prevArrow={<SliderArrowPrev />}
        nextArrow={<SliderArrowNext />}
        {...carouselSettings}
      >
        <div className="container-card-carousel">
          <Link to="/profile/2">
            <CardProfile {...maxime} />
          </Link>
        </div>
        <div className="container-card-carousel">
          <Link to="/profile/6">
            <CardProfile {...floflo} />
          </Link>
        </div>
        <div className="container-card-carousel">
          <Link to="/profile/1">
            <CardProfile {...nicolas} />
          </Link>
        </div>
        <div className="container-card-carousel">
          <Link to="/profile/4">
            <CardProfile {...will} />
          </Link>
        </div>
        <div className="container-card-carousel">
          <Link to="/profile/3">
            <CardProfile {...mus} />
          </Link>
        </div>
        <div className="container-card-carousel">
          <Link to="/profile/5">
            <CardProfile {...xavier} />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
