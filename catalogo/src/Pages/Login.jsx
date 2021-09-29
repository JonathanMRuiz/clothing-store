import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
    linear-gradient(rgba(255,255,255,0.5), 
    rgba(255,255,255,0.5)), 
    url("https://dhb3yazwboecu.cloudfront.net/1469//_DSC1106-09octubre20-203.jpg
    ")right;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Wrapper = styled.div`
    width: 25%;
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
    flex-direction:column;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0px;
    padding:10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px; 
    background-color: teal;
    color:white;
    cursor:pointer;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor:pointer;
`


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Ingresa a tu cuenta</Title>
                <Form>
                    
                    <Input placeholder="Nombre de usuario"/>
                    
                    <Input placeholder="Contraseña"/>
                    
                    <Button>Ingresar</Button>
                    <Link>No recuerdo mi contraseña</Link>
                    <Link>Crea una nueva cuenta</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;
