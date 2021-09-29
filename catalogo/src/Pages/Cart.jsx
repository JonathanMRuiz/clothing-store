import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components'
import Announcement from '../Components/Announcement/Announcement';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { mobile } from '../responsive';


const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding:"10px" })};
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    padding:20px;
    display:flex;
    align-items:center;
    justify-content: center;
    
`

const TopBottom = styled.button`
    padding:10px;
    font-weight:600;
    cursor:poointer;
    margin: 20px;
    border: ${props=> props.type === "filled" && "none"};
    background-color:${props=> props.type === "filled" ? "black" : "transparent"};
    color: ${props=> props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    ${mobile({ display:"none" })};
`
const TopText = styled.span`
    text-decoration: underline;
    cursor:pointer;
    margin: 0px 10px;

`

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({ flexDirection:"column" })};
`

const Info = styled.div`
    flex:3;
`

const Hr = styled.hr`
    background-color:#eee;
    border: none;
    height: 1px;
`



const Product = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({ flexDirection:"column" })};

    
`

const ProductDetail = styled.div`
    flex: 2;
    display:flex;
`

const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize = styled.span`

`


const PriceDetail = styled.span`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin:"5px 15px" })};

`

const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;
    ${mobile({ marginBottom:"20px" })};
`

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px ;
    display:flex;
    justify-content:space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color:white;
    font-weigth: 600;
`


const Cart = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Title>Tu bolsa</Title>
                <Top>
                    <TopBottom>Continue con la compra</TopBottom>
                    <TopTexts>
                        <TopText>Bolsa (2)</TopText>
                        <TopText>Lista de deseos (0)</TopText>
                    </TopTexts>
                    <TopBottom type="filled">Seguir mirando</TopBottom>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.chombas.com.ar/wp-content/uploads/2019/02/merchandising_campera-polar2.jpg"/>
                                <Details>
                                    <ProductName><b>Producto: </b> Campera negra </ProductName>
                                    <ProductId><b>ID: </b> 164164698496 </ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Talle: </b> L </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>3000$</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.chombas.com.ar/wp-content/uploads/2019/02/merchandising_campera-polar2.jpg"/>
                                <Details>
                                    <ProductName><b>Producto: </b> Campera negra </ProductName>
                                    <ProductId><b>ID: </b> 164164698496 </ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Talle: </b> L </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>3000$</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Resumen</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>6000 $</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Descuento</SummaryItemText>
                            <SummaryItemPrice>1000 $</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>5000 $</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CONTINUAR</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart;
