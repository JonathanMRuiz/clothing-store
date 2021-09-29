import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../Components/Announcement/Announcement';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Newsletter from '../Components/Newsletter/Newsletter';
import { mobile } from '../responsive';

import { priceProduct } from "../data";


const Container = styled.div``

const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({ padding:"10px",flexDirection:"column" })};

`
const ImageContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit:cover;
    ${mobile({ height:"250px" })};

`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({ padding:"10px" })};

`
const Title = styled.h1`
    font-weight:200;
`
const Description = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display:flex;
    justify-content:space-between;
    ${mobile({ width:"75%" })};

`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin:0px 5px;
    cursor:pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({ width:"100%" })};

`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height:30px;
    border-radius: 10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0xp 5px;
`
const Button = styled.button`
    padding:15px;
    border: 1px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color: #f8f4f4;
    }
`



const Product = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            {priceProduct.map(item => (
            <Wrapper>
                <ImageContainer>
                    <Image src={item.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Price>{item.price}$</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color={item.color}/>
                            
                        </Filter>
                        <Filter>
                            <FilterTitle>Talle</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>{item.size}</FilterSizeOption>
                                
                            </FilterSize>
                            
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Agregar al carrito</Button>

                    </AddContainer>
                    
                </InfoContainer>
            </Wrapper>
            ))}
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product;
