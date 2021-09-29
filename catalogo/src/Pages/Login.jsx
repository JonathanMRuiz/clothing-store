import { ArrowBackSharp } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom'
import Announcement from '../Components/Announcement/Announcement';
import Navbar from '../Components/Navbar/Navbar';


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
const LinkClick = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor:pointer;
`
const ArrowBack = styled.div`
    width: 20px;
    color:black;
    padding: 0px;
    margin: 10px;
`


const Login = () => {
    return (
        <>
        <Announcement/>
        <Navbar/>
        <Container>
            <Wrapper>
                <ArrowBack>
                    <Link to={'/'}> <ArrowBackSharp/> </Link>
                </ArrowBack>
                <Title>Ingresa a tu cuenta</Title>
                <Form>
                    
                    <Input placeholder="Nombre de usuario"/>
                    
                    <Input placeholder="Contraseña"/>
                    
                    <Button>Ingresar</Button>
                    <LinkClick>No recuerdo mi contraseña</LinkClick>
                    <LinkClick>Crea una nueva cuenta</LinkClick>
                </Form>
            </Wrapper>
        </Container>
        </>
    )
}

export default Login;
