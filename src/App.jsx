import React from 'react';
import styled from 'styled-components';
import Menu from './components/menu/Menu';
import Calculator from './components/calculator/Calculator';
import { CalculatorContextProvider } from './context/calculatorContext';
import ThemeProvider from './context/ThemeProvider';
import { GraphContextProvider } from './context/graphContext';
import Header from './components/header/Header';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`;

const CalculatorContainer = styled.div`
    flex: 1;
`;

function App() {
    return (
        <ThemeProvider>
            <CalculatorContextProvider>
                <GraphContextProvider>
                    <PageContainer>
                        <Header />
                        <BodyContainer>
                            <Menu />
                            <CalculatorContainer>
                                <Calculator />
                            </CalculatorContainer>
                        </BodyContainer>
                    </PageContainer>
                </GraphContextProvider>
            </CalculatorContextProvider>
        </ThemeProvider>
    );
}

export default App;
