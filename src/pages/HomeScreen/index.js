import React, {useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList } from './styled';

import Header from '../../components/Header';

import api from '../../api';

import CategoryItem from '../../components/CategoryItem';

export default () => {

    const history = useHistory();

    const [headerSearch, setHeaderSearch] = useState('');

    const [categories, setCategories ] = useState([]);

    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        const getCategories = async() => {
        const cat = await api.getCategories();
        if(cat.error  == ''){
            setCategories( cat.result );
        }
        };
        getCategories();
    }, []);

    useEffect(() => {
        
    }, [activeCategory]);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}/>
       
            {categories.length > 0 &&

                    <CategoryArea>
                        Selecione uma categoria 
                        
                        <CategoryList>

                            <CategoryItem data={{id:'', 
                             title:'Todas as categorias',
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

        </Container>
    );
}