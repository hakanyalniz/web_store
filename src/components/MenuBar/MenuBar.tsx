import { MenuBarFlexContainer } from "./MenuBarStyles";

function MenuBar() {
  return (
    <MenuBarFlexContainer>
      <ul>
        <a href="">
          <li>
            <span className="material-symbols-outlined">menu</span>
            <span>All</span>
          </li>
        </a>
        <a href="">
          <li>Today's Deals</li>
        </a>
        <a href="">
          <li>New Releases</li>
        </a>
        <a href="">
          <li>Top Sellers</li>
        </a>
        <a href="">
          <li>Sell</li>
        </a>
        <a href="">
          <li>Customer Service</li>
        </a>
        <a href="">
          <li>Registry</li>
        </a>
        <a href="">
          <li>Gift Cards</li>
        </a>
      </ul>
    </MenuBarFlexContainer>
  );
}

export default MenuBar;
