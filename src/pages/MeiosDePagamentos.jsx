import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
//import Titulo from "../components/Titulo/Titulo";
//import Icone from "../imagens/meios_de_pagamentos.png";
import Faturas from "../components/Faturas/Faturas";
import Clientes from "../components/Clientes/Clientes";
import NovoCliente from "../components/NovoCliente/NovoCliente";
import NovaFatura from "../components/NovaFatura/NovaFatura";
import { ContainerFaturas, ContainerClientes, Div, DivNovoCliente, DivNovaFatura} from "./Style";
import { useState } from "react";
import HeaderPage from "../components/Header_MeiosPGTO/HeaderPgto";
import {BotaoHeader_pgto, Container_Header, TituloHeader_pgto} from "../components/Header_MeiosPGTO/Style";


const MeiosDePagamentos = () => {

    const [MenuAberto, setMenuAberto] = useState(true);
    const [faturasVisiveis, setFaturasVisiveis] = useState(true);
    const [clientesVisiveis, setClientesVisiveis] = useState(false);
    const [novoClienteVisivel, setNovoClienteVisivel] = useState(false);
    const [criarFatura, setCriarFatura] = useState(false);
    const [faturaNome, setFaturaNome] = useState('');
    const [faturaEmail, setFaturaEmail] = useState('');
    const [faturaCpf, setFaturaCpf] = useState('');
    const [faturaEndereco, setFaturaEndereco] = useState('');
    const [voltar, setVoltar] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!MenuAberto);
    };
    
    const toggleFaturasVisiveis = () => {
        setFaturasVisiveis(!faturasVisiveis);
    };
    
    const toggleClientesVisiveis = () => {
        setFaturasVisiveis(!faturasVisiveis);
        setClientesVisiveis(!clientesVisiveis);
    };

    const toggleNovoClienteVisivel = () => {
        setClientesVisiveis(!clientesVisiveis);
        setNovoClienteVisivel(!novoClienteVisivel);
    };

    const toggleCriarFatura = ( nome, email, cpf, endereco ) => {
        setFaturaNome(nome);
        setFaturaEmail(email);
        setFaturaCpf(cpf);
        setFaturaEndereco(endereco);
        setClientesVisiveis(!clientesVisiveis);
        setCriarFatura(!criarFatura);
    };

    const toggleVoltar = () => {
        setCriarFatura(!criarFatura);
        setClientesVisiveis(!clientesVisiveis);
    };
    
    return (
        <>
            <Header toggleMenu = {toggleMenu}/>
            <Menu isOpen = {MenuAberto}/>

            <Container_Header className={`${MenuAberto ? 'menuAberto' : ''} ${faturasVisiveis ? '' : 'oculto'}`}>
                <TituloHeader_pgto>Emissão de Novas Faturas</TituloHeader_pgto>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <BotaoHeader_pgto onClick={toggleClientesVisiveis}>Nova Fatura</BotaoHeader_pgto>
                </div>
            </Container_Header>

            <ContainerFaturas className={`${MenuAberto ? 'menuAberto' : ''} ${faturasVisiveis ? '' : 'oculto'}`}>
                <Faturas/>
            </ContainerFaturas>

            <Div>
                <Container_Header className={`${MenuAberto ? 'menuAberto' : ''} ${clientesVisiveis ? '' : 'oculto'}`}>
                    <TituloHeader_pgto>Emissão de Novos Clientes</TituloHeader_pgto>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <BotaoHeader_pgto onClick={toggleNovoClienteVisivel}>Novo Cliente</BotaoHeader_pgto>
                        <BotaoHeader_pgto onClick={toggleClientesVisiveis}>Voltar</BotaoHeader_pgto>
                    </div>
                </Container_Header>

                <ContainerClientes className={`${MenuAberto ? 'menuAberto' : ''} ${clientesVisiveis ? '' : 'oculto'}`}>
                    <Clientes toggleCriarFatura={toggleCriarFatura}/>
                </ContainerClientes>
            </Div>

            <Container_Header className={`${MenuAberto ? 'menuAberto' : ''} ${novoClienteVisivel ? '' : 'oculto'}`}>
                <TituloHeader_pgto>Emissão de Novos Clientes</TituloHeader_pgto>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <BotaoHeader_pgto style={{ backgroundColor: '#808080'}}>Novo Cliente</BotaoHeader_pgto>
                    <BotaoHeader_pgto onClick={toggleNovoClienteVisivel}>Voltar</BotaoHeader_pgto>
                </div>
            </Container_Header>

            <DivNovoCliente className={`${MenuAberto ? 'menuAberto' : ''} ${novoClienteVisivel ? '' : 'oculto'}`}>
                <NovoCliente></NovoCliente>
            </DivNovoCliente>

            <Container_Header className={`${MenuAberto ? 'menuAberto' : ''} ${criarFatura ? '' : 'oculto'}`}>
                <TituloHeader_pgto>Criar Nova Fatura</TituloHeader_pgto>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <BotaoHeader_pgto style={{ backgroundColor: '#808080'}}>Novo Cliente</BotaoHeader_pgto>
                    <BotaoHeader_pgto onClick={toggleVoltar}>Voltar</BotaoHeader_pgto>
                </div>
            </Container_Header>

            <DivNovaFatura className={`${MenuAberto ? 'menuAberto' : ''} ${criarFatura ? '' : 'oculto'}`}>
                <NovaFatura nome={faturaNome} email={faturaEmail} cpf={faturaCpf} endereco={faturaEndereco}/>
            </DivNovaFatura>
        </>
    );
}

export default MeiosDePagamentos;