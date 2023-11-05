import styled from "styled-components";

export const HeroContainerStyled = styled.div`
    width: 95%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(../images/Hero/Hero.jpg);
    background-position: center;   
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0 auto;
    margin-top: 10px;
`

export const HeroTitle = styled.h1`
    font-size: 5rem;
    color: white;
    text-align: center;

    @media (max-width: 810px) {
        font-size: 3.5rem;
    }
    
    @media (max-width: 576px) {
        font-size: 3rem;
    }
`

export const HeroText = styled.p`
    font-size: 2.5rem;
    color: white;
    text-align: center;

    @media (max-width: 810px) {
        font-size: 1.5rem;
    }
`