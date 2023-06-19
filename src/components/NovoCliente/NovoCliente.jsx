import {Container,Enviar,Sair,Titulo,Formulario,Field,input_data,h3} from "./Style.js";
import ImagemX from "../../imagens/sair.png" ;

const NovoCliente = ( ) => (
    <Container>
        <Titulo><h2>Novo Cliente</h2></Titulo>
        <Sair><img src={ImagemX} alt="ImagemX" style={{paddingLeft:"7px",paddingTop:"5px"}}/></Sair>
        <Formulario>
        <Field>
            <h3>Nome</h3>
        <input style={input_data}></input>
        </Field>
        <Field>
            <h3>E-mail</h3>
        <input style={input_data}></input>
        </Field>
        <Field>
            <h3>CPF/CNPJ</h3>
        <input style={input_data}></input>
        </Field>
        <Field>
            <h3>Data De Criação</h3>
        <input style={input_data}></input>
        </Field>
        </Formulario>
        <Enviar><p style={{marginTop:"10px",fontWeight:"bolder",fontSize:"25px"}}>Enviar</p></Enviar>
    </Container>
);

export default NovoCliente;