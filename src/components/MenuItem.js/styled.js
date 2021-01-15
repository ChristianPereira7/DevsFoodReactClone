import styled from 'styled-components';

export const LinkArea = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: ${props=>props.active ? '#0B4D08' : 'transparent'};
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const LinkIcon = styled.img`
    width: 35px;
    height: auto;
`;