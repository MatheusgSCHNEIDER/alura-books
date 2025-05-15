import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';
import livroImg from '../imagens/livro.png'
import {Botao} from '../componentes/Pesquisa'


const AppContainer = styled.div`
    max-width: 100vw;
    height: 100%;
    position: relative;
    background-image: linear-gradient(180deg, #002F52 50%, #326589);
    margin-top: -30px
    
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 15%;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    max-width: 100%;
    padding-top: 30px
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState( [] )

async function fetchFavoritos() {
  const favoritosDaAPI = await getFavoritos()
  setFavoritos(favoritosDaAPI)
}

useEffect( () => {
  fetchFavoritos()
}, [])

  return (
    <AppContainer>
       <div>
       <Titulo>Aqui estão seus livros favoritos:</Titulo>
       <ResultadoContainer>
         {
           favoritos.length !== 0 ? favoritos.map(favorito => (
             <Resultado>
               <img src={livroImg} alt='imagem livro favorito'/>
               <div>
                <p>Titulo: {favorito.nome}</p>
                <Botao onClick={() => deleteFavorito(favorito.id) && window.location.reload() }>Remover favorito</Botao>
               </div> 
             </Resultado>
           )) : null
         }
       </ResultadoContainer>
     </div>
    </AppContainer>
  );
}



export default Favoritos;
