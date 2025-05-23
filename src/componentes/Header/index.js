import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: rgb(203, 236, 248);
    display: flex;
    justify-content: center;
    height: 55px;
`

function Header () {
    return (
        <HeaderContainer>
            <Link to={'/'}>
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer> 
    )
}

export default Header;