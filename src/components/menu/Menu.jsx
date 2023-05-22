import React from 'react';
import styled from 'styled-components';
import MenuBody from './MenuBody';
import NumericalMethodSelect from './NumericalMethodSelect';
import ModeSelect from './ModeSelect';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const MenuHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom-width: thick;
    border-bottom-style: dotted;
`;

const MenuBodyWrapper = styled.div`
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
`;

function Menu() {
    return (
        <Wrapper>
            <MenuHeaderWrapper>
                <ModeSelect />
                <NumericalMethodSelect />
            </MenuHeaderWrapper>
            <MenuBodyWrapper>
                <MenuBody />
            </MenuBodyWrapper>
        </Wrapper>
    );
}

export default Menu;
