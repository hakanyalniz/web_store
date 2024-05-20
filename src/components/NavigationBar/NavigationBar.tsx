import {
  NavFlexContainer,
  NavLeft,
  NavFill,
  NavRight,
  NavLogo,
  NavLocationContainer,
  NavLocationChange,
  NavSearchBar,
  LanguageSelect,
  Account,
  ShoppingCart,
  ShoppingCartText,
} from "./NavigationStyles";
import logo from "../../assets/Web-Store_transparent.png";
import USALan from "../../assets/USA-Lan.jpg";

function NavigationBar() {
  return (
    <NavFlexContainer>
      <NavLeft>
        <NavLogo>
          <a href="/">
            <img src={logo} alt="WebStore Logo" />
          </a>
        </NavLogo>
        <NavLocationContainer href="/">
          <span className="material-symbols-outlined">location_on</span>
          <div>
            <p>Deliver to</p>
            <NavLocationChange>Sanft</NavLocationChange>
          </div>
        </NavLocationContainer>
      </NavLeft>
      <NavFill>
        <NavSearchBar>
          <input type="text" placeholder="Search.." />
          <button>
            <span className="material-symbols-outlined">search</span>
          </button>
        </NavSearchBar>
      </NavFill>
      <NavRight>
        <LanguageSelect href="/">
          <img src={USALan} alt="Language Flag" />
          <p>EN</p>
        </LanguageSelect>

        <Account href="/">
          <div>
            <p>Hello, user</p>
            <span>Account & Lists</span>
          </div>
        </Account>

        <ShoppingCart href="/">
          <span className="material-symbols-outlined">shopping_cart</span>
          <ShoppingCartText>Cart</ShoppingCartText>
        </ShoppingCart>
      </NavRight>
    </NavFlexContainer>
  );
}

export default NavigationBar;
