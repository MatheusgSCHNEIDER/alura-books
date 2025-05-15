import styled from "styled-components";

export const Titulo = styled.h2`
    max-width: 100vw;
    padding: ${props => props.paddingTop || '30px'};
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px'};
    text-align: ${props => props.alinhamentoTexto || 'center'};
    margin: 0;
`