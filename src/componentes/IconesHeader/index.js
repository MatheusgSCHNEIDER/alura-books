import Perfil from '../../imagens/perfil.svg'
import Sacola from '../../imagens/sacola.svg'
import MenuIconi from '../../imagens/menu-icon.png'
import styled from 'styled-components'
import ListenerLarguraTela from '../../verificadorLarguraTela/verificadorLarguraTela';

const Icone = styled.li`
   margin-right: 30px;
   width: 25px;
   align-items: center; 
   display: flex;
   cursor: pointer;

  :hover {
    zoom: 1.2;
}
`
const Icones = styled.ul`
  display: flex;
`

function IconesHeader () {
  const larguraTela = ListenerLarguraTela();
  if ( larguraTela > 770) {
    const icones = [Perfil, Sacola]
    return (
      <Icones>
        {icones.map ( (icone) => (
          <Icone><img src={icone} alt='icones'></img></Icone>
        ))}
      </Icones>
    )
  }
  else {
    const icones = [Perfil, Sacola, MenuIconi]
    return (
      <Icones>
        {icones.map ( (icone) => (
          <Icone><img src={icone} alt='icones'></img></Icone>
        ))}
      </Icones>
    )
  }
}

export default IconesHeader