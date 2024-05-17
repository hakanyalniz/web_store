import styled, { css } from "styled-components";

// The overall container for the whole nav bar
export const NavFlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
  color: white;
  background-color: black;

  img {
    height: 50px;
    margin: 5px 5px;
  }
  .material-symbols-outlined {
    color: white;
  }

  p {
    font-size: 12px;
  }
`;

// Added to styles that need hover, or else it will repeat too much
const hoverStyle = css`
  border: 2px solid transparent;
  border-radius: 5px;

  &:hover {
    border-color: white;
  }
`;

export const NavLogo = styled.div`
  ${hoverStyle}
`;

export const NavLocationContainer = styled.div`
  ${hoverStyle}

  display: flex;
  margin-left: 10px;
`;

export const NavLocationChange = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

// Covers the entire searchbar, including the button
export const NavSearchBar = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  input {
    width: max(300px, 60vw);
    border-radius: 5px 0 0 5px;
    padding: 10px 3px;
  }
  button {
    border: none;
    background: none;
  }
  .material-symbols-outlined {
    border: 2px solid transparent;
    padding: 5.5px 10px;
    border-radius: 0 5px 5px 0;
    background-color: rgb(197, 128, 0);
    font-size: 30px;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
  .material-symbols-outlined:hover {
    cursor: pointer;
    background-color: rgb(133, 86, 0);
  }
  .material-symbols-outlined:active {
    border-color: white;
  }
`;
