import Container from "../styled_components/Container";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import MenuBar from "../components/MenuBar/MenuBar";

function HomePage() {
  return (
    <Container>
      <NavigationBar />
      <MenuBar />
    </Container>
  );
}

export default HomePage;
