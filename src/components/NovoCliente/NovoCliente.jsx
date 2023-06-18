import {Container,Container2,Container3,Container4,Container5,Enviar,Sair,Titulo} from "./Style.js";
import ImagemX from "../../imagens/sair.png" ;

const NovoCliente = ( props ) => (
    <Container>
        <Titulo><h1>Novo Cliente</h1></Titulo>
        <Sair><img src={ImagemX} alt="ImagemX" style={{paddingLeft:"7px",paddingTop:"5px"}}/></Sair>
        <h3 style={{paddingTop:"50px",paddingLeft:"50px"}}>Nome</h3>
        <Container2></Container2>
        <h3 style={{paddingTop:"50px",paddingLeft:"50px"}}>E-mail</h3>
        <Container3></Container3>
        <h3 style={{paddingTop:"60px",paddingLeft:"50px"}}>Cpf/Cnpj</h3>
        <Container4></Container4>
        <h3 style={{paddingTop:"60px",paddingLeft:"50px"}}>Data De Criação</h3>
        <Container5></Container5>
        <Enviar>Enviar</Enviar>
    </Container>
);
       
export default NovoCliente;