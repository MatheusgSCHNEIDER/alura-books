import styled from 'styled-components';
import ListenerLarguraTela from '../../verificadorLarguraTela/verificadorLarguraTela';
import { Link } from 'react-router-dom';

const Opcoes = styled.ul`
  display: flex;
`

const Opcao = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  
  :hover {
    background-color: #326589;
    color: aliceblue;
    border-radius: 15px;
    padding: 4px;
  }
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
  const larguraTela = ListenerLarguraTela(); 
  
  if ( larguraTela > 770) {
    return (
      <Opcoes>
        {textoOpcoes.map( (texto) => (
          <Link to={`/${texto.toLowerCase().replace(/\s/g, '')}`}><Opcao><p>{texto}</p></Opcao></Link> // Utiliza na URL '/texto' em Lower case e remove os espaços em branco da string
        ))}
      </Opcoes>
    )      
  }
  else {
    return null; //se a tela for menor que 700px não exibe esta opções, somente o icone de opções de 3 barras
  }
    
}

export default OpcoesHeader;