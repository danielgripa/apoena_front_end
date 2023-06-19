import styled from "styled-components";
import Dispositivo  from "../../utils";
import React, { useState } from 'react';

const Container = styled.div`
    position: relative;
    background-color: #f1f1f1;
    margin-top: 50px;
    width: 70%;
    height: 500px;
    left:10%;
    top: 5%;
    border-radius:10px;
    border: 2px solid black;
    box-shadow: -4px 4px 14px 1px rgba(0, 0, 0, 0.5);

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        width:80%;
        height: 400%;
    };
`;

const NomeEmail = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    
`;

const Cpf = styled.div`
  display: flex;
  flex-direction: column;
    padding-left: 4%;
    margin-top: 4px;
    margin-bottom: 4px;
`;

const Endereco = styled.div`
  display: flex;
  flex-direction: column;
    padding-left: 4%;
    margin-top: 4px;
    margin-bottom: 4px;
`;

const Container2 = styled.div`
    position: absolute;
    background-color: #5B1F53;
    width: 50%;
    height: 35%;
    left:10%;
    bottom:100px;
    border-radius: 10px;
    border: 2px solid black;
    @media screen and (min-width: ${Dispositivo.tablet}px) {
        left:100px;
        width:60%;
        height: 150%;
    };
    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
      width: 70%;
    height: 35%;
    left: 15%;
    bottom: 35%;
    };
`;

const AdicionarItem = styled.div`
    position: absolute;
    background-color: #5B1F53;
    width: 120px;
    height: 25px;
    bottom: -30%;
    text-align: center;
    border-radius: 10px;
    border: 1px solid black;
    box-shadow: -4px 4px 14px 1px rgba(0, 0, 0, 0.5);
    color: white;
`;

const Salvar = styled.div`
    position: absolute;
    background-color: #6d1f53;
    width: 120px;
    height: 25px;
    left:100%;
    bottom:5%;
    border-radius: 10px;
    text-align: center;
    justify-content: center;
    border:4px solid black;
    color: white;

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        width:50px;
        height: 50px;
        left:80%;
        bottom:10%;
    };
`;

const MetodoPagamento = styled.div`
    position: absolute;
    background-color: #5B1F53;
    width: 50%;
    left: 10%;
    bottom: 5%;
    border-radius: 10px;
    border: 2px solid black;
    color: white;
`;

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleMenu} style={{paddingTop:"10px",width:"100%",backgroundColor:"#5B1F53",color: "white"}}>
          Método De Pagamento
        </button>
        {isOpen && (
          <div className="dropdown-content" style={{backgroundColor:"#5B1F53"}}>
            <p>Pix</p>
            <p>Cartão De Crédito</p>
            <p>Boleto</p>
          </div>
        )}
      </div>
    );
  }
  
export {Container, NomeEmail, Cpf, Endereco, Container2,AdicionarItem,Salvar,MetodoPagamento,Dropdown} 