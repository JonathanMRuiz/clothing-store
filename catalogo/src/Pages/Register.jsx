
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
    linear-gradient(rgba(255,255,255,0.5), 
    rgba(255,255,255,0.5)), 
    url("https://img.uenicdn.com/image/upload/v1548677393/category/shutterstock_535224304.jpg")center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Wrapper = styled.div`
    width: 40%;
    padding:20px;
    background-color: white;
    ${mobile({ width:"75%" })};

    
`
const Title = styled.div`
    font-size:40px;
    font-weight:400;
`
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 10px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 10px 20px;
    cursor:pointer;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px; 
    background-color: teal;
    color:white;
    cursor:pointer;
    
`


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Crea una cuenta</Title>
                <Form>
                    <Input placeholder="Nombre"/>
                    <Input placeholder="Apellido"/>
                    <Input placeholder="Nombre de usuario"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Contraseña"/>
                    <Input placeholder="Confirmar contraseña"/>
                    <Agreement>
                        Acepta terminos y condiciones? Haga click para leer mas.
                    </Agreement>
                    <Button>Crear</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;