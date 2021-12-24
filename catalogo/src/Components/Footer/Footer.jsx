import {  Email, GitHub, Instagram, Phone, Room } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../../responsive';


const Container = styled.div`
    display:flex;
    ${mobile({ flexDirection:"column" })};

`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;

`

const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    color:white;
    background-color: #${props=> props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;

`
const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display:"none" })};


`

const Title = styled.h3`
    margin-botton:30px;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display:flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom:
`

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ backgroundColor:"#fff8f8" })};


`

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`
const Payment = styled.img`
    width: 50%;

`

const Logo = styled.h1`

`





const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>JMR.</Logo>
                <Description>What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </Description>
                
            </Left>
            <Center>
                <Title>Enlaces</Title>
                <List>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Carrito</ListItem>
                    <ListItem>Hombre</ListItem>
                    <ListItem>Mujer</ListItem>
                    <ListItem>Accesorios</ListItem>
                    <ListItem>Compras</ListItem>
                    <ListItem>Terminos</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacto</Title>
                <ContactItem><Room style = {{marginRight:"10px"}}/>Buenos Aires, Morón</ContactItem>
                <ContactItem><Phone style = {{marginRight:"10px"}}/>+11 22334455</ContactItem>
                <ContactItem><Email style = {{marginRight:"10px"}}/>contact@jmr.dev</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer;
