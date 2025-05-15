import Input from '../Input'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getLivros } from '../../servicos/livros'
import { postFavorito } from '../../servicos/favoritos'
import livroImg from '../../imagens/livro.png'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(180deg, #002F52 35%,rgb(59, 119, 161) 100%);
    color: #FFF;
    text-align: center;
    padding: 80px 0;
    max-width: 100vw;
    
       
`

const TituloInput = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;    
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;   
`
const DadosLivro = styled.p`
     
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 250px;
        text-align: left
    }
    img {
        max-width: 150px;
        max-height: 150px;
        margin-right: 20px
    }
    &:hover {
        border: 1px solid white;

    }
`
const DivBotao = styled.div `
    flex-direction: column
    
`

export const Botao = styled.button `
    background-color: #EB9B00;
    color: #FFF;
    padding: 5px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    width: 150px;
    
    &:hover {
        cursor: pointer;
    }

`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros ] = useState( [] )
    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
    }

   async function insertFavorito(id) {
    try {
        await postFavorito(id);
        alert(`Livro de ID:${id} inserido com sucesso`);
    } catch (error) {
        if (error.response) {
            alert(error.response.data.Erro);
            // exibe o erro do backend
        } 
        else {
            
            alert("Ocorreu um erro ao inserir o livro nos favoritos.");
            console.error(error);
        }
    }
}

    return (
        <PesquisaContainer>
            <TituloInput>Já sabe por onde começar?</TituloInput>
            <Subtitulo>Encontre o seu livro em nossa estante</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur = {evento => { // quando clica fora do campo ele executa as instruções
                   const textoDigitado = evento.target.value
                   
                   if ( textoDigitado === '') {     //se o texto digitado é vazio não retorna lista, porque faz a busca com null
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(null))
                    setLivrosPesquisados(resultadoPesquisa)
                   }
                   else {
                    const resultadoPesquisa = livros.filter( livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()))
                    setLivrosPesquisados(resultadoPesquisa)
                   }
                    
                }}
                onKeyDown = {evento => {
                    if ( evento.key === 'Enter' || evento.key === 'Backspace' ){ //se apertar enter ou apagar a pesquisa também será refeita
                        const textoDigitado = evento.target.value
                    
                    if ( textoDigitado === '') {     //se o texto digitado é vazio não retorna lista, porque faz a busca com null
                     const resultadoPesquisa = livros.filter( livro => livro.nome.includes(null))
                     setLivrosPesquisados(resultadoPesquisa)
                    }
                    else {
                     const resultadoPesquisa = livros.filter( livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()))
                     setLivrosPesquisados(resultadoPesquisa)
                    }
                     
                 }}
                    }         
            />
            {livrosPesquisados.map( livro => (
            <Resultado> 
                <img src={livroImg} alt='Capa do livro'/>
                <DivBotao>
                    <DadosLivro>Titulo: <strong>{livro.nome}</strong></DadosLivro>
                    <DadosLivro>Autor: <strong>{livro.autor}</strong></DadosLivro>
                    <Botao onClick={() => insertFavorito(livro.id)}>Favoritar</Botao>
                </DivBotao>
            </Resultado>
            
                
            ))}
        </PesquisaContainer>
        
    )
}

export default Pesquisa;
    
