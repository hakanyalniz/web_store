import Container from "../styled_components/Container";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import MenuBar from "../components/MenuBar/MenuBar";
import ShopSection from "../components/ShopSection/ShopSection";
import Footer from "../components/Footer/Footer";
import Overlay from "../components/DarkOverlay/Overlay";

function HomePage() {
  return (
    <Container>
      <Overlay />
      <NavigationBar />
      <MenuBar />
      <ShopSection />
      <Footer />
    </Container>
  );
}

export default HomePage;
