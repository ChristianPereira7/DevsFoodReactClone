import React from 'react';
import { Container, ModalBody } from './styled';


export default ({ children, setStatus, status }) => {

    const handleModalClick = (e) => {
        if(e.target.classList.contains('modalBg')){
            setStatus(false);
        }
    }

    return(
            <Container 
            status={status}
            onClick={handleModalClick}
            className="modalBg"
            >
            <ModalBody>
                 {children}
            </ModalBody>
        </Container>
    );
}