import React from 'react'
import { FeaturedProductImage, FeaturedProductInfo, FeaturedProductStyled, FeaturedProductsStyled, ProductsContainerStyled, ProductsTitleStyled } from './ProductsStyles'

import Button from '@mui/material/Button';

const Products = () => {
    return (
        <ProductsContainerStyled>
            <ProductsTitleStyled>Productos destacados</ProductsTitleStyled>
            <FeaturedProductsStyled>
                <FeaturedProductStyled>
                    <FeaturedProductImage src='./images/productos-destacados/Producto-1.jpg'></FeaturedProductImage>
                    <FeaturedProductInfo>
                        <h3>PlayStation 5 Edición Limitada Marvel´s Spider-Man 2</h3>
                        <p>$850.000</p>
                        <Button variant='contained'>Comprar</Button>
                    </FeaturedProductInfo>
                </FeaturedProductStyled>
                <FeaturedProductStyled>
                    <FeaturedProductImage src='./images/productos-destacados/Producto-2.jpg'></FeaturedProductImage>
                    <FeaturedProductInfo>
                        <h3>PlayStation 5 God of War Ragnarok</h3>
                        <p>$777.000</p>
                        <Button variant='contained'>Comprar</Button>
                    </FeaturedProductInfo>
                </FeaturedProductStyled>
                <FeaturedProductStyled>
                    <FeaturedProductImage style={{ width: '170px', height: '210px' }} src='./images/productos-destacados/Producto-3.jpg'></FeaturedProductImage>
                    <FeaturedProductInfo>
                        <h3>Nintendo Switch Mario Red Edition</h3>
                        <p>$430.000</p>
                        <Button variant='contained'>Comprar</Button>
                    </FeaturedProductInfo>
                </FeaturedProductStyled>
            </FeaturedProductsStyled>
        </ProductsContainerStyled>
    )
}

export default Products