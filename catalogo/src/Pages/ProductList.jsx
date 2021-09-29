import styled from 'styled-components';
import Announcement from '../Components/Announcement/Announcement';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Newsletter from '../Components/Newsletter/Newsletter';
import Products from '../Components/Products/Products';
import { mobile } from '../responsive';

const Container = styled.div`

`
const Title = styled.h1`
    margin:20px;

`

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`
const Filter = styled.div`
    margin:20px;
    ${mobile({ width:"0px 20px", display:"flex",flexDirection:"column" })};

`

const FilterText = styled.span`
    font-size:20px;
    font-weight: 600;
    margin-right:20px
    ${mobile({ marginRight:"0px" })};

`
const Select = styled.select`
    padding:10px;
    margin-right:20px;
    ${mobile({ margin:"10px 0px" })};


`
const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>Tienda de Ropa</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtrar productos:</FilterText>
                    <Select>
                        <Option disable selected>Color</Option>
                        <Option>Blanco</Option>
                        <Option>Negro</Option>
                        <Option>Azul</Option>
                        <Option>Rojo</Option>
                    </Select>
                    <Select>
                        <Option disable selected>Talle</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Ordenar productos:</FilterText>
                    <Select>
                        <Option selected>Novedad</Option>
                        <Option>Mayor precio</Option>
                        <Option>Menor precio</Option>
                        
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList;