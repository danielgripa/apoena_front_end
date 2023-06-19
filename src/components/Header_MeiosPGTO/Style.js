import styled from "styled-components";
import Dispositivo from "../../utils";

const Container_Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    left: 20px;
    padding-top: 10px;
    position: relative;

    &.menuAberto {
    left: 270px;
    };

    &.oculto {
        display: none;
    }

    &.visivel {
        display: block;
    }

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        left: 100px;
    };
`;

const TituloHeader_pgto = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #5B1F53;
`;

const BotaoHeader_pgto = styled.button`
    font-family: 'Roboto', sans-serif;
    background-color: #5B1F53;
    color: white;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    margin-left: 10px;
`;
//
// const hr_header = styled.hr`
//     border: 1px solid gray;
//     color: #5B1F53;
// `;



export {Container_Header, TituloHeader_pgto, BotaoHeader_pgto}
