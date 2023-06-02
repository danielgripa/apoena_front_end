import { SpanTitulo,Container, Icone, Subtitulo } from "./Style";


const Titulo= (page) => (

    <Container temNavBarSc={page.temNavBar}>
        <Icone>
            <img src = {page.icon} alt="ícone" />
        </Icone>
        <SpanTitulo>
            {page.id}
        </SpanTitulo> 
        <Subtitulo>
            {page.subtitulo}
        </Subtitulo>
    </Container>

    
); 

export default Titulo;