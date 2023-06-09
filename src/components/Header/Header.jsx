import {Container,Vmenu,Vperfil,Vsino,Titulo, SubContainer} from "./Style";
import ImagemMenu from "../../imagens/Menu.png";
import ImagemSino from "../../imagens/Sino.png" ;
import ImagemPerfil from "../../imagens/Perfil.png" ;

const Header =({toggleMenu, isOpen}) => {
   
 
    return(
        <Container>
            <SubContainer>
                <Vmenu
                    onClick={toggleMenu}
                    variant="primary"
                >
                    <img src={ImagemMenu}
                        alt="ImagemMenu"
                    />
                </Vmenu> 
                <Titulo>Home</Titulo>
            </SubContainer>
            <SubContainer></SubContainer>
            <SubContainer></SubContainer>
            <SubContainer>
                <Vsino>
                    <img 
                        src={ImagemSino}
                        alt="ImagemSino"/>
                </Vsino>
                <Vperfil><img src={ImagemPerfil} alt="ImagemPerfil"/></Vperfil>
            </SubContainer>
        </Container>
    )
};

export default Header;