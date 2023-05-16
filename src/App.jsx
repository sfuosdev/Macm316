import React from 'react';
import styled from 'styled-components';
import Menu from './components/menu/Menu';
import GraphingCalculator from './components/calculator/GraphingCalculator';

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`;

const MenuContainer = styled.div`
    width: 300px;
    border-right-width: thick;
    border-right-style: dotted;
`;

const CalculatorContainer = styled.div`
    flex: 1;
`;

function App() {
    return (
        <PageContainer>
            <MenuContainer>
                <Menu />
            </MenuContainer>
            <CalculatorContainer>
                <GraphingCalculator />
            </CalculatorContainer>
        </PageContainer>
    );
}

export default App;
