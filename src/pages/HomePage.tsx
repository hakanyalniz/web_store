import Container from "../styled_components/Container";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import MenuBar from "../components/MenuBar/MenuBar";
import ShopSection from "../components/ShopSection/ShopSection";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <Container>
      <NavigationBar />
      <MenuBar />
      <ShopSection />
      <Footer />
    </Container>
  );
}

export default HomePage;
