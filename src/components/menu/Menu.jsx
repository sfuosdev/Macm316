import React from 'react';
import styled from 'styled-components';
import MenuOptions from './MenuOptions';
import MethodSelect from './MethodSelect';
import ModeSelect from './ModeSelect';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const ModeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom-width: thick;
    border-bottom-style: dotted;
`;

function Menu() {
    return (
        <Wrapper>
            <ModeWrapper>
                <ModeSelect />
                <MethodSelect />
            </ModeWrapper>
            <hr />
            <MenuOptions />
        </Wrapper>
    );
}

export default Menu;
