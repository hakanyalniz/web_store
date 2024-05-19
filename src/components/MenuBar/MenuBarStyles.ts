import styled from "styled-components";

export const MenuBarFlexContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  color: white;
  background-color: rgb(27, 27, 27);

  /* The flex makes it horizontal instead of vertical */
  ul {
    display: flex;
  }

  /* The below method can also be used to center the texts */
  /* ul li:not(:has(.material-symbols-outlined)) {
    padding-top: 15px;
  } */

  /* Remove the list styles, make it flex to center the texts */
  ul > a li {
    cursor: pointer;

    list-style-type: none;
    border: 1px solid transparent;

    display: flex;
    align-items: center;
    font-size: 14px;

    padding: 10px 5px;

    margin-right: 10px;

    border-radius: 5px;
  }

  ul a li {
    color: white;
  }

  ul a li:hover {
    border-color: white;
  }

  ul a li:active {
    background-color: rgb(59, 59, 59);
  }

  ul a li:has(.material-symbols-outlined) {
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
