import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    background-color: #FF0000; 
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    background-color: #136713;
    width: 80px; 
    flex-direction: column;
    align-items: center;
`;

export const PageBody = styled.div`
    display: flex;
    background-color: #00980d;
    background-image: url('/assets/bg.png');
    flex: 1; 
    overflow-y: auto;
`;