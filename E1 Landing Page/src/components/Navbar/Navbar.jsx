import React from 'react'
import { CartContainerStyled, LinksContainerStyled, MenuContainerStyled, NavbarContainerStyled } from './NavbarStyles'

import { FaBars } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';


const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <div>
                <a href="/#">
                    <img src="./images/logo-img/Logo.png" alt="Logo" />
                </a>
            </div>

            <LinksContainerStyled>
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
                <CartContainerStyled>
                    <BsFillCartFill />
                </CartContainerStyled>
            </LinksContainerStyled>

            <MenuContainerStyled>
                <FaBars />
                <BsFillCartFill />
            </MenuContainerStyled>
        </NavbarContainerStyled>
    )
}

export default Navbar