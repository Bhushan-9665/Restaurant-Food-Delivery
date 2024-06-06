import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import { TopMeels } from './TopMeels';

const MultipleItemCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 4000,
    arrows: false,
  }
  return (
    <Slider {...settings}>
      {TopMeels.map((item)=> <CarouselItem image= {item.image} title={item.title}/>)}
    </Slider>
  )
}

export default MultipleItemCarousel
