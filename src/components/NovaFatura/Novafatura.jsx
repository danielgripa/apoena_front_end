import {Container, NomeEmail, Cpf, Endereco, Container2,AdicionarItem,Salvar,MetodoPagamento,Dropdown} from "./Style.js";

const NovaFatura = ( props ) => (
    <Container>
      <h3 style={{paddingLeft:"25px",marginBottom:"0.5%"}}>Nova Fatura</h3>
        <h5 style={{paddingLeft:"5%",marginTop:"4px",marginBottom:"4px"}}>Enviar Para</h5>
        <NomeEmail>
          <div style={{margin:"0px"}}>{props.nome}</div>
          <div style={{margin:"0px"}}>{props.email}</div>
        </NomeEmail>

        <h5 style={{paddingLeft:"4%",marginTop:"4px",marginBottom:"4px"}}>Pessoa Fisica/Juridica</h5>
        <Cpf>
          {props.cpf}
        </Cpf>

        <h5 style={{paddingLeft:"4%",marginTop:"4px",marginBottom:"4px"}}>Endereço</h5>
        <Endereco>
          {props.endereco}
        </Endereco>
        
        <Container2><AdicionarItem >Adicionar Item</AdicionarItem></Container2>
        <Salvar>Emitir Fatura</Salvar>
        <MetodoPagamento><Dropdown></Dropdown></MetodoPagamento>
        
    </Container>
);
       
export default NovaFatura;