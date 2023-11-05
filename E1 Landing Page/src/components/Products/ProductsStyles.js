import styled from "styled-components";

export const ProductsContainerStyled = styled.div`
    margin: 0 auto;
    padding-bottom: 40px;
`

export const ProductsTitleStyled = styled.h2`
    text-align: center;
    font-size: 1.8rem;
    padding: 20px;
`

export const FeaturedProductsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
    width: 100%;
`

export const FeaturedProductStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 15px;
    border: 2px solid black;
    width: 320px;
    height: 390px;

    @media (max-width: 350px) {
        width: 250px;
        height: 390px;
    }
`

export const FeaturedProductImage = styled.img`
    width: 290px;
    height: 225px;
    padding: 10px;

    @media (max-width: 350px) {
        width: 250px;
        height: 180px;
    }
`

export const FeaturedProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    h3 {
        text-align: center;
    }

    p {
        font-size: 18px;
        font-weight: 600;
    }
`