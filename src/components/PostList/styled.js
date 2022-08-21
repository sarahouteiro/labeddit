import styled from "styled-components";

export const Posts = styled.div`
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: #E9E561;
    height: auto;  
    border-radius: 5px;
    padding-bottom: 5px;
`

export const EnviadoPor = styled.p`
    color: #786C5E;
    font-size: 14px;
    padding-top: 10px;
    margin-left: 10px;
`

export const Texto = styled.p`
    font-size: 18px;
    padding: 10px;
    color: black;
    cursor: pointer;
`

export const DivBottom = styled.div`
    display: flex;
`

export const DivEngajamento = styled.div`
    display: flex;
    border: solid 1px #786C5E;
    border-radius: 20px;
    margin-left: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    width: 80px;
    justify-content: space-between;
    align-items: center;
    svg {
        cursor: pointer;
    }
    p {
        font-size: 12px;
        color: #786C5E;
    }
`

export const DivComentarios = styled.div`
    display: flex;
    border: solid 1px #786C5E;
    border-radius: 20px;
    margin-left: 5px;
    margin-bottom: 5px;
    padding-left: 10px;
    padding-top: 2px;
    padding-right: 10px;
    width: 40px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    p {
        font-size: 12px;
        color: #786C5E;
    }
`

export const Carregando = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`