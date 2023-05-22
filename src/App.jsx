import React from 'react';
import styled from 'styled-components';
import Menu from './components/menu/Menu';
import Calculator from './components/calculator/Calculator';
import { CalculatorContextProvider } from './context/calculatorContext';

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`;

const MenuContainer = styled.div`
    width: 350px;
    border-right-width: thick;
    border-right-style: dotted;
`;

const CalculatorContainer = styled.div`
    flex: 1;
`;

function App() {
    return (
        <PageContainer>
            <CalculatorContextProvider>
                <>
                    <MenuContainer>
                        <Menu />
                    </MenuContainer>
                    <CalculatorContainer>
                        <Calculator />
                    </CalculatorContainer>
                </>
            </CalculatorContextProvider>
        </PageContainer>
    );
}

export default App;
