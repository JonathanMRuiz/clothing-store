import styled from 'styled-components'
import { mobile } from '../../responsive';


const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position:relative;
`

const Image = styled.img`
    width: 100%;
    height: 90%;
    object-fit:cover;
    ${mobile({ height:"30vh" })};

    
`
const Title = styled.h1`
    color:white;
    margin-bottom:20px;
    font-size: 75px;
    ${mobile({ fontSize:"45px" })};

`
const Info = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`
const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:gray;
    cursor:pointer;
    font-weight: 700;
`


const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Comprar ahora</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem;