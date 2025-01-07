import styled from "styled-components";

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Adjust based on design */
`;

export const Slide = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "imageURL", // Don't forward "imageURL" to the DOM
})<{ imageURL: string }>`
  position: relative;

  /* For some reason the percentage doesn't work */
  height: 100%;
  min-width: 100%;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(27, 27, 27, 0.5) 50%,
      rgba(27, 27, 27, 1) 100%
    ),
    url(${(props) => props.imageURL});
  background-size: cover;
  background-position: center;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 5;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const SlideArrow = styled.div`
  display: block;
  color: white;
  text-align: center;

  &:hover {
    color: gray;
  }

  span {
    font-size: 30px;
    opacity: 0.7;
  }
`;
