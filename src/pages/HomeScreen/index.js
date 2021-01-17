import React, {useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Titulo } from './styled';

import Header from '../../components/Header';

import api from '../../api';


export default () => {

    const [headerSearch, setHeaderSearch] = useState('');

    useEffect(() => {
        const getCategories = async() => {
        const categories = await api.getCategories();
        console.log(categories);
        };
        getCategories();
    }, []);

    const history = useHistory();

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}/>
        </Container>
    );
}