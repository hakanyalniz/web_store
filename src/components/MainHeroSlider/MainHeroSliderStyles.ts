import styled from "styled-components";

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Adjust based on design */
  overflow: hidden; /* Hide the slides that are out of view */
`;

export const SliderContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "index", // Don't forward "index" to the DOM
})<{ index: number }>`
  display: flex;

  height: 100%;
  width: 100%;

  transition: transform 1s ease-in-out;
  transform: translateX(${(props) => -props.index * 100}%);
`;

export const Slide = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "imageURL", // Don't forward "imageURL" to the DOM
})<{ imageURL: string }>`
  position: relative;

  min-width: 100%;
  height: 100%;

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

export const PrevButton = styled(NavButton)`
  left: 10px;
`;

export const NextButton = styled(NavButton)`
  right: 10px;
`;
