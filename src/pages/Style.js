import { styled } from "styled-components";
import Dispositivo from "../utils";

const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 20px;
    padding-left: 20px;
    top: 100px;
    max-width: 1100px;
    gap:80px;

    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: space-evenly;
    transition: flex-grow 0.3s ease-in-out;

    &.menuAberto {
        margin-left: 20%; /* Ajuste o valor conforme necessário */
        width:80%;
    };

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        height: 720px;
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        margin-top: 40px;

    };

`;

const ContainerExtrato = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    padding-top: 20px;
    left: 40px;
    top: 100px;
    max-width: 1100px;

    flex-wrap: wrap;
    justify-content: flex-evenly;
    align-content: space-start;
    transition: flex-grow 0.3s ease-in-out;
    gap: 80px;

    &.menuAberto {
      margin-left: 0%; /* Ajuste o valor conforme necessário */
      width:80%;
    };

    @media screen and (min-width: ${Dispositivo.desktop}px) {
      height: 720px;
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
      margin-top: 40px;
      left: 20%;
    };
`;

const ContainerFaturas = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      padding-top: 20px;
      min-width: 400px;

      &.menuAberto {
      };

      &.oculto {
        display: none;
      }
      
      @media (max-width: 768px) {
        width: 100%;
    
        &.menuAberto {
          left: 0;
          width: 100%;
        }
      }
`;

const ContainerClientes = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 20px;
      max-width: 900px;

      &.menuAberto {
        left: 20%;
        width: 80%;
      };

      &.oculto {
        display: none;
      };
`;

const Div = styled.div`
      display: flex;
      flex-direction: column;
      padding: auto;
      margin: auto;
      align-items: center;
      justify-content: space-around;
`;

const DivNovoCliente = styled.div`
    &.oculto {
      display: none;
    };
`;

const DivNovaFatura = styled.div`

    height: 200px;
    width:100%;
    &.oculto {
      display: none;
    };
`;

export {ContainerHome, ContainerExtrato, ContainerFaturas, ContainerClientes, Div, DivNovoCliente, DivNovaFatura};