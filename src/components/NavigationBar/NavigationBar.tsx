import { NavFlexContainer } from "./NavigationStyles";
import logo from "../../assets/Web-Store_transparent.png";

function NavigationBar() {
  return (
    <NavFlexContainer>
      <a href="/">
        <img src={logo} alt="WebStore Logo" />
      </a>
    </NavFlexContainer>
  );
}

export default NavigationBar;
