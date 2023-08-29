import React from 'react';
import styled from 'styled-components';
import MenuBody from './MenuBody';
import NumericalMethodSelect from './NumericalMethodSelect';
import ModeSelect from './ModeSelect';
import Footer from './Footer';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const MenuHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid black;
`;

function Menu() {
    return (
        <Wrapper>
            <MenuHeaderWrapper>
                <ModeSelect />
                <NumericalMethodSelect />
            </MenuHeaderWrapper>
            <MenuBody />
            <Footer />
        </Wrapper>
    );
}

export default Menu;
