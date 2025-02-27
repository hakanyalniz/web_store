import { SliderWrapper, Slide, SlideArrow } from "./MainHeroSliderStyles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";

// {slider} is destructuring of props.slides
function MainHeroSlider() {
  const imageSet = [
    "/images/heroImages/OIG2.jpeg",
    "/images/heroImages/OIG3.jpeg",
    "/images/heroImages/OIG4.jpeg",
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: (
      <SlideArrow>
        {<span className="material-symbols-outlined">arrow_back_ios</span>}
      </SlideArrow>
    ),
    nextArrow: (
      <SlideArrow>
        {<span className="material-symbols-outlined">arrow_forward_ios</span>}
      </SlideArrow>
    ),
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {imageSet.map((slide, index) => (
          <Slide key={index} imageURL={slide} />
        ))}
      </Slider>
    </SliderWrapper>
  );
}

export default MainHeroSlider;
