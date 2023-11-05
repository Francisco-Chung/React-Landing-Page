import React from 'react'
import { FooterContainerStyled, FooterLinkStyled, FooterLinksContainer, FooterPStyled } from './FooterStyles'

import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <FooterContainerStyled>
            <FooterLinksContainer>
                <FooterLinkStyled><a href="#">Sobre Nosotros</a></FooterLinkStyled>
                <FooterLinkStyled><a href="#">Términos y Condiciones</a></FooterLinkStyled>
                <FooterLinkStyled><a href="#">Contacto</a></FooterLinkStyled>
            </FooterLinksContainer>
            <FooterPStyled>
                <AiOutlineCopyrightCircle /><p>Todos los derechos reservados</p>
            </FooterPStyled>
        </FooterContainerStyled>
    )
}

export default Footer