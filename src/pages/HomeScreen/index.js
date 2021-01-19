import React, {useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container,
         CategoryArea, 
         CategoryList, 
         ProductList, 
         ProductArea, 
         ProductPaginationArea,
         ProductPaginationItem        
        } from './styled';

import ReactToolTip from 'react-tooltip';

import Header from '../../components/Header';

import api from '../../api';

import CategoryItem from '../../components/CategoryItem';

import ProductItem from '../../components/ProductItem';


export default () => {

    const history = useHistory();

    const [headerSearch, setHeaderSearch] = useState('');

    const [categories, setCategories ] = useState([]);

    const [activeCategory, setActiveCategory] = useState(0);

    const [ products, setProducts ] = useState('');

    const [totalPages, setTotalPages ] = useState(0);

    const [activePage, setActivePage ] = useState(0);


    const getProducts = async () => {
        const prods = await api.getProducts();
        if(prods.error == ''){
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
        }
    }

    useEffect(() => {
        const getCategories = async() => {
            const cat = await api.getCategories();
            if(cat.error  == ''){
                setCategories( cat.result );
            }
            ReactToolTip.rebuild();
        };
        getCategories();
    }, []);

    useEffect(() => {
        getProducts();
    }, [activeCategory]);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}/>
       
            {categories.length > 0 &&

                    <CategoryArea>
                        Selecione uma categoria 
                        
                        <CategoryList>

                            <CategoryItem data={{id:'', 
                             name:'Todas as categorias',
                             image:'/assets/food-and-restaurant.png'}}
                             activeCategory={activeCategory}
                             setActiveCategory={setActiveCategory}
                             />
                            {categories.map((item, k) => (
                                <CategoryItem 
                                key={k} 
                                data={item}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                
                                />
                            ))}
                        </CategoryList>
                
                </CategoryArea>
                
            }
            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((item, k) => (
                            <ProductItem
                                key={k}
                                data={item} 
                            />
                        ))}
                    </ProductList>
                </ProductArea>
            }
            TOTAL={totalPages}
            {totalPages > 0  &&
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item, k) =>(
                        <ProductPaginationItem key={k}>
                            {k + 1}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }
        </Container>
    );
}