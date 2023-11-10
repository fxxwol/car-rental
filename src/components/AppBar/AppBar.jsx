import { Container } from '../../common/Container.styled';
import Navigation from '../Navigation/Navigation';
import { Header, HeaderTitle } from './AppBar.styled';

function AppBar() {

    return (
        <Container>
            <Header>
                <HeaderTitle to='/'>DrivEase</HeaderTitle>
                <Navigation />
            </Header>
        </Container>
    );
}

export default AppBar;