import {
  NavLogo,
  NavFlexContainer,
  NavLocationContainer,
  NavLocationChange,
  NavSearchBar,
} from "./NavigationStyles";
import logo from "../../assets/Web-Store_transparent.png";

function NavigationBar() {
  return (
    <NavFlexContainer>
      <NavLogo>
        <a href="/">
          <img src={logo} alt="WebStore Logo" />
        </a>
      </NavLogo>
      <NavLocationContainer>
        <span className="material-symbols-outlined">location_on</span>
        <div>
          <p>Deliver to</p>
          <NavLocationChange>Sanft</NavLocationChange>
        </div>
      </NavLocationContainer>
      <NavSearchBar>
        <input type="text" placeholder="Search.." />
        <button>
          <span className="material-symbols-outlined">search</span>
        </button>
      </NavSearchBar>
      <div>Language</div>
      <div>Account</div>
      <div>Cart</div>
    </NavFlexContainer>
  );
}

export default NavigationBar;
