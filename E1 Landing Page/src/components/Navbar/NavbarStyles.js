import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
    height: 80px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;

    img {
        width: 100px;
    }
`

export const LinksContainerStyled = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    a {
        color: black;
        font-size: 20px;
        }
    @media (max-width: 576px) {
        display: none;
    }
`

export const CartContainerStyled = styled.div`
    font-size: 1.5rem;

    @media (max-width: 576px) {
        display: flex;
    }
`

export const MenuContainerStyled = styled.div`
    display: none;
    font-size: 2rem;
    cursor: pointer;
    @media (max-width: 576px) {
        display: flex;
        gap: 20px;
    } 
`