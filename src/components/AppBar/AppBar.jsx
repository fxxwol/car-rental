import Navigation from '../Navigation/Navigation';
import { Header, HeaderTitle, NavDiv } from './AppBar.styled';

function AppBar() {

    return (
        <Header>
            <NavDiv>
                <HeaderTitle to='/'>DriveEase</HeaderTitle>
                <Navigation />
            </NavDiv>
        </Header>
    );
}

export default AppBar;