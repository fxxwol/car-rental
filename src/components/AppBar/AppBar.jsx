import { Container } from '../../common/Container.styled';
import { Logo } from '../../common/Logo.styled';
import Navigation from '../Navigation/Navigation';
import { Header } from './AppBar.styled';

function AppBar() {

    return (
        <Container>
            <Header>
                <Logo to='/'>DrivEase</Logo>
                <Navigation />
            </Header>
        </Container>
    );
}

export default AppBar;