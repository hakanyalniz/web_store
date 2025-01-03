import styled from "styled-components";

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent gray */
  opacity: 0; /* Initially hidden */
  pointer-events: none; /* Prevent interaction with overlay */
  transition: opacity 0.3s ease; /* Smooth transition */
  z-index: 10; /* Ensure it sits above most elements */
`;
