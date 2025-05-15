import {livros} from './dadosUltimosLancamentos';
import styled from 'styled-components';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    max-width: 100vw;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    max-width: 100vw;
    justify-content: center;
    cursor: pointer;

    `

const ImagemLivros = styled.img `
    width: 15%;
`

function UltimosLancamentos () {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor='#EB9B00'
                tamanhoFonte = '36px'
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <ImagemLivros src={livro.src} alt='Livros NEW'/>
                ))} 
            </NovosLivrosContainer>
            <CardRecomenda
            titulo='Talvez você se interesse por...'
            subtitulo='Angular 11'
            descricao='Construindo uma aplicação com a plataforma Google'
            img={imagemLivro}
            />    
        </UltimosLancamentosContainer>
        
    )
}

export default UltimosLancamentos;