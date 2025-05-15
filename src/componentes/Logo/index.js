import logo from '../../imagens/logo.svg'
import styled from 'styled-components';
import ListenerLarguraTela from '../../verificadorLarguraTela/verificadorLarguraTela';

const LogoContainer = styled.div`
    display: flex;
    max-height: 10px
`
const LogoImg = styled.img`
    margin-right: 10px;
    height: 35px;
    margin-top: 7px;

    :hover {
    zoom: 1.03;
}
`
const Titulo = styled.p`
    font-size: 30px;
    margin-top: 5px;

    :hover {
    zoom: 1.03;
}
` 

function Logo() {
    const larguraTela = ListenerLarguraTela(); 
  
    if ( larguraTela > 770) {
        return (
            <LogoContainer>
                <LogoImg src={logo} alt='Logo Alura Books'></LogoImg>
                <Titulo><strong>Alura Books</strong></Titulo>
            </LogoContainer>
        )
    }
    else { //seria para diminuir o tamanho da fonte quando a tela é pequena mas não funcionou
        return (
            <LogoContainer>
                <LogoImg src={logo} alt='Logo Alura Books'></LogoImg>
                <Titulo tamanhoFonte='5px'>A Books</Titulo> 
            </LogoContainer>
        )  
    }
        
}
export default Logo;