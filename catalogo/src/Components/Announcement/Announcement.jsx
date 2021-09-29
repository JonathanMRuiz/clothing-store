
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:24px;
    font-weight:bold;

`

const Announcement = () => {
    return (
        <Link to='/'>
            <Container>
                JMR.
            </Container>
        </Link>
    )
}

export default Announcement;
