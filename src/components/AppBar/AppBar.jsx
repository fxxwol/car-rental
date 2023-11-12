import { Container } from "../../common/Container.styled";
import Logo from "../../common/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { Header } from "./AppBar.styled";

function AppBar() {
  return (
    <Container>
      <Header>
        <Logo size={90} />
        <Navigation />
      </Header>
    </Container>
  );
}

export default AppBar;
