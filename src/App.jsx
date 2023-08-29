import React from 'react';
import styled from 'styled-components';
import Menu from './components/menu/Menu';
import Calculator from './components/calculator/Calculator';
import { CalculatorContextProvider } from './context/calculatorContext';
import ThemeProvider from './context/ThemeProvider';
import { GraphContextProvider } from './context/graphContext';

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`;

const MenuContainer = styled.div`
    width: 550px;
    border-right: 2px solid black;
`;

const CalculatorContainer = styled.div`
    flex: 1;
`;

function App() {
    return (
        <PageContainer>
            <ThemeProvider>
                <CalculatorContextProvider>
                    <GraphContextProvider>
                        <>
                            <MenuContainer>
                                <Menu />
                            </MenuContainer>
                            <CalculatorContainer>
                                <Calculator />
                            </CalculatorContainer>
                        </>
                    </GraphContextProvider>
                </CalculatorContextProvider>
            </ThemeProvider>
        </PageContainer>
    );
}

export default App;
