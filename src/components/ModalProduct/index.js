import React from 'react';
import { Container,
         ProductArea,
         ProductPhoto,
         ProductInfoArea,
         ProductDetails,
         ProductQuantityArea,
         ProductButtons } from './styled';


export default ({data}) => {


    return(
        <Container>          
           <ProductArea>
                <ProductPhoto src={data.image}/>
                    <ProductInfoArea>
                        <ProductDetails>
                            {data.name} <br/>
                            {data.ingredients}
                        </ProductDetails>       
                        <ProductQuantityArea>
                           {data.price}
                        </ProductQuantityArea>
                    </ProductInfoArea>
           </ProductArea>
           <ProductButtons>

           </ProductButtons>
        </Container>
    );
}