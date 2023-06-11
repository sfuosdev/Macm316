import React from 'react';
import styled from 'styled-components';
import CalculatorOptionForm from '../calculator/Form';

const MenuBodyWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
`;

function MenuBody() {
    return (
        <MenuBodyWrapper>
            <CalculatorOptionForm />
        </MenuBodyWrapper>
    );
}

export default MenuBody;
