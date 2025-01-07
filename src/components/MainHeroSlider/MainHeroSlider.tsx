import {
  SliderWrapper,
  SliderContent,
  Slide,
  PrevButton,
  NextButton,
} from "./MainHeroSliderStyles";
import { useState, useEffect } from "react";

// {slider} is destructuring of props.slides
function MainHeroSlider() {
  //   let slides = ["/OIG2.jpeg", "/OIG3.jpeg", "/OIG4.jpeg"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState([
    "/OIG2.jpeg",
    "/OIG3.jpeg",
    "/OIG4.jpeg",
  ]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentSlides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === currentSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // This fixes the problem that occurred due to the jump from transformX(200%) to transformX(0%)
  // (from the last image to the next one when you clicked the next button)
  // However it is a dirty fix that is not sustainable due to the large number of images it would generate
  // A better fix would be to either not use carousel style hero images or use a library like "slick"
  useEffect(() => {
    // trigger when on the last hero image
    if (currentIndex === currentSlides.length - 1) {
      //   When on the last image, copy the older ones in front of it
      setCurrentSlides(currentSlides.concat(currentSlides));
    }
  }, [currentIndex, currentSlides]);

  return (
    <SliderWrapper>
      <SliderContent index={currentIndex}>
        {currentSlides.map((slide, index) => (
          <Slide key={index} imageURL={slide} />
        ))}
      </SliderContent>
      <PrevButton onClick={handlePrev}>Prev</PrevButton>
      <NextButton onClick={handleNext}>Next</NextButton>
    </SliderWrapper>
  );
}

export default MainHeroSlider;
