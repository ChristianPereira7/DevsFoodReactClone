import React, { useState } from 'react';
import { CartArea,
         CartHeader,
          CartIcon, 
          CartText, 
          CartBody, 
          CartDown, 
          ProductsArea,
          ProductItem, 
          ProductPhoto,
          ProductInfoArea,
          ProductName,
          ProductPrice,
          ProductQuantityArea } from './styled';
import { useSelector } from 'react-redux';


export default () => {

    const products = useSelector(state => state.cart.products);  

    const [show, setShow] = useState(true);

    const [closed, setClosed] = useState(false);

    const handleCartClick = () => {
        setShow(!show);
    }

    return(

        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png"/>
                <CartText>Meu Carrinho({products.length})</CartText>
                {show &&
                <CartDown src="/assets/down.png"/>
            }
            </CartHeader>
            <CartBody show={show}>
                <ProductsArea>
                    {products.map((item, k)=>(
                        <ProductItem key={k}>
                            <ProductPhoto src={item.image}/>
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                        <ProductQuantityArea></ProductQuantityArea>
                    </ProductItem>
                    ))}
                    
                </ProductsArea>
            </CartBody>
        </CartArea>
        
    );
}