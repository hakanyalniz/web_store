import styled, { css } from "styled-components";

// The overall container for the whole nav bar
export const NavFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 5px 15px;
  gap: 15px;
  color: white;
  background-color: black;

  .material-symbols-outlined {
    color: white;
  }

  p {
    font-size: 12px;
  }

  a:visited {
    color: white;
  }
`;

const FlexCommon = css`
  gap: 15px;
`;

export const NavLeft = styled.div`
  ${FlexCommon}
  display: flex;
`;

// It is set to flex grow 1, so that it can cover the empty space
export const NavFill = styled.div`
  ${FlexCommon}

  display: flex;
  flex-grow: 1;
`;
export const NavRight = styled.div`
  ${FlexCommon}

  display: flex;
`;

// Added to styles that need hover, or else it will repeat too much
// 68 pixel height is added to all hover items, so that their height matches the navbar height (which is the same as logo height)
// This is done so that it looks better in hover
const hoverStyle = css`
  border: 1px solid transparent;
  border-radius: 5px;
  height: 68px;
  align-items: center;

  padding: 5px;

  &:hover {
    border-color: white;
  }
`;

export const NavLogo = styled.div`
  ${hoverStyle}

  img {
    height: 50px;
    margin: 5px 5px;
  }
`;

// The section that shows location to send deliveries
export const NavLocationContainer = styled.a`
  ${hoverStyle}

  display: flex;
`;

// This part changes when user selects new location(?)
export const NavLocationChange = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

// Covers the entire searchbar, including the button
export const NavSearchBar = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  width: 100%;

  input {
    width: 100%;
    min-width: 100px;
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

// Select a language
export const LanguageSelect = styled.a`
  ${hoverStyle}

  display: flex;
  gap: 5px;

  img {
    height: 12px;
  }

  p {
    font-weight: bold;
  }
`;

// Account information/link
export const Account = styled.a`
  ${hoverStyle}

  display: flex;

  span {
    font-size: 14px;
    font-weight: bold;
  }
`;

// Shopping cart
export const ShoppingCart = styled.a`
  ${hoverStyle}

  display: flex;

  .material-symbols-outlined {
    font-size: 30px;
  }
`;

export const ShoppingCartText = styled.a`
  font-size: 14px;
  font-weight: bold;
`;
