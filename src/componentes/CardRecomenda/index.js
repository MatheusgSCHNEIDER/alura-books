import styled from "styled-components"
import { Titulo } from "../Titulo"

const CardRecomendaContainer = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 42%;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%; 
`
const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 80%;
    &:hover {
        cursor: pointer;
    }
`
const Descricao = styled.p`
    max-width: 300px;
`

const SubtituloNomeLivro = styled.h4`
    color: #002F52;
    font-size: 16px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = styled.img`
    width: 80%;
`

function CardRecomenda ({titulo, subtitulo, descricao, img}) {
    return (
        <CardRecomendaContainer>
            <div>
                <Titulo tamanhoFonte='20px' cor='#EB9B00' alinhamento='left' paddingTop='10px'>{titulo}</Titulo>
                <SubtituloNomeLivro>{subtitulo}</SubtituloNomeLivro>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img} alt='Imagem recomendação'/>
                <Botao>Saiba mais</Botao>
            </div>
                
        </CardRecomendaContainer>
    )
}

export default CardRecomenda;
