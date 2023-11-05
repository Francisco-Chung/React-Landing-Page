import React from 'react'
import { HeroContainerStyled, HeroText, HeroTitle } from './HeroStyles'

const Hero = () => {
    return (
        <HeroContainerStyled>
            <HeroTitle>
                Somos Game Station
            </HeroTitle>
            <HeroText>
                Tecnología al mejor precio del mercado 
            </HeroText>
        </HeroContainerStyled>
    )
}

export default Hero