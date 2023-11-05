import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
    background: #222831;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 45px 0;
    color: white;
`

export const FooterLinksContainer = styled.ul`
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    gap: 20px;

    @media (max-width: 425px) {
        flex-direction: column;
    }
`

export const FooterLinkStyled = styled.li`
    font-size: 1rem;
    font-weight: 500;
    
    a {
        color: white;
    }
`

export const FooterPStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`