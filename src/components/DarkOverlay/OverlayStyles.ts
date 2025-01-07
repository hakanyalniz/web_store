import styled from "styled-components";

// Define the type for the props your styled component will accept
interface OverlayProps {
  isActive: boolean;
}

export const OverlayStyle = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent gray */
  opacity: ${(props) =>
    props.isActive ? 1 : 0}; /* Show when isActive is true */
  pointer-events: none; /* Prevent interaction with overlay */
  transition: opacity 0.3s ease; /* Smooth transition */
  z-index: 10; /* Ensure it sits above most elements */
`;

OverlayStyle.shouldForwardProp = (prop) => prop !== "isActive";
