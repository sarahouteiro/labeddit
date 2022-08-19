import styled from "styled-components";

export const LogoLogin = styled.img`
    height: 150px;
    width: 150px;
    @media (min-width: 720px) {
        height: 200px;
        width: 200px;
    }
`

export const Titulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    h1 {
        margin: 0;
        padding: 0;
        margin: 10px 0 0 0;
        color: #887ED8;
        @media (min-width: 720px) {
        font-size: 40px;
        }
    }
    p {
        margin: 10px 0 0 0;
        padding: 0;
        color: #887ED8;
        @media (min-width: 720px) {
        font-size: 20px;
        }
    }
`

export const Botao = styled.div`
    border-top: solid 1px #887ED8;
    padding: 20px 10px 0px 10px;
    margin: 30px;
    position: fixed;
    width: 78%;
    bottom: 10;
    left: 0;
    @media (min-width: 720px) {
        margin: 15px auto;
        position: relative;
        }
`
