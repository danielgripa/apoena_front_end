import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
//import Titulo from "../components/Titulo/Titulo";
//import Icone from "../imagens/meios_de_pagamentos.png";
import Faturas from "../components/Faturas/Faturas";
import Table from "../components/AgGrid/tabela"
import Clientes from "../components/Clientes/Clientes";
import { ContainerFaturas, ContainerClientes } from "./Style";
import { useState } from "react";
import HeaderPage from "../components/Header_MeiosPGTO/HeaderPgto";
import {BotaoHeader_pgto, Container_Header, TituloHeader_pgto} from "../components/Header_MeiosPGTO/Style";


const Subtitulo = "";
const TemNavBar = false;

const MeiosDePagamentos = () => {

    const [MenuAberto, setMenuAberto] = useState(true);
    const [faturasVisiveis, setFaturasVisiveis] = useState(true);
    const [clientesVisiveis, setClientesVisiveis] = useState(false);

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
                <Table/>
            </ContainerFaturas>

            <Container_Header className={`${MenuAberto ? 'menuAberto' : ''} ${clientesVisiveis ? '' : 'oculto'}`}>
                <TituloHeader_pgto>Emissão de Novos Clientes</TituloHeader_pgto>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <BotaoHeader_pgto>Novo Cliente</BotaoHeader_pgto>
                    <BotaoHeader_pgto onClick={toggleClientesVisiveis}>Voltar</BotaoHeader_pgto>
                </div>
            </Container_Header>

            <ContainerClientes className={`${MenuAberto ? 'menuAberto' : ''} ${clientesVisiveis ? '' : 'oculto'}`}>
                <Clientes/>
            </ContainerClientes>
            
        </>
    );
}

export default MeiosDePagamentos;