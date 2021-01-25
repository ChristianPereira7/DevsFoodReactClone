import React, { useState } from 'react';
import { CartArea, CartHeader, CartIcon, CartText, CartBody, CartDown } from './styled';
import { useSelector } from 'react-redux';


export default () => {

    const products = useSelector(state => state.cart.products);  

    const [show, setShow] = useState(false);

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
                <div style={{width: 50, height:300}}></div>
            </CartBody>
        </CartArea>
        
    );
}