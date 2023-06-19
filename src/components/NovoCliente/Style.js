import styled from "styled-components";
import Dispositivo  from "../../utils";



const h3={
    margintop:"1px",

};
const input_data = {
    width: '100%',
    height: '30%',
    backgroundColor:'#5B1F53',
    color: 'white',
    /*padding: '14px 20px',*/
    margin: '0px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',

    '@media screen and (max-width: 480px)': {
    margin:'20rem',
    width: '100%',
    height: '200px',
    }
};

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;
    margin-left: 5%;
    margin-top:0%;
    font-size:15px;
    margin-top: 0.5px;
    flex-wrap: wrap;

    @media screen and (max-width: 1080px){
        font-size: 15px;
        height: 67%;
        width: 80%;
    };

    @media screen and (max-width: 480px) {
        font-size: 20px;
        height: 60%;
        width: 80%;
        justify-content: center;
        margin-bottom:1px;
        margin-top:1px;
    };
`;

const Field = styled.div`
    @media screen and (max-width: 480px) {
        height: 200px;
        margin-left: 25px;
        margin-top: 4rem;
        align-items: center;
    };
`;

const Container = styled.div`
    position: absolute;
    background-color:white;
    width: 75%;
    height: 100%;
    left: 10%;
    top: 30%;
    margin-left: 0%;
    border-radius:10px;
    box-shadow: -4px 4px 14px 1px rgba(91, 31, 83, 0.5);
    border: 4px solid #5B1F53;

    &.oculto {
        display: none;
    };
`;

const Enviar = styled.div`
    position: absolute;
    background-color: #5B1F53;
    width: 100%;
    height: 50px;
    border-radius: 2px;
    text-align: center;
    bottom: 0%;
    border: 0.5px solid #5B1F53;
`;

const Sair= styled.div`
    position:absolute;
    width: 30px;
    height: 30px;
    background-color:#f1f1f1;
    right: 5%;
    top:5%;
    border-radius: 20px;
    vertical-align:bottom;

    @media screen and (max-width: 480px) {
        left: 400px;
  };
`;

const Titulo = styled.div`
    text-align: center;
    left: 20px;
    font-size:25px;

    @media screen and (max-width: 1080px){
        font-size:20px;
    };

    @media screen and (max-width: 480px) {
        font-size: 15px;
        bottom:1350px;
    };
`;
export {Container,Enviar,Sair,Titulo,Formulario,Field,input_data,h3}
