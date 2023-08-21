import React from 'react';
import styled from 'styled-components';
import Menu from './components/menu/Menu';
import Calculator from './components/calculator/Calculator';
import { CalculatorContextProvider } from './context/calculatorContext';
import ThemeProvider from './context/ThemeProvider';
import GraphLegend from './components/common/GraphLegend';
import { GraphContextProvider } from './context/graphContext';

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
const graphLegendData = [
    { color: 'red', title: 'Red' },
    { color: 'green', title: 'Green' },
    { color: 'blue', title: 'Blue' },
];

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
                                <GraphLegend data={graphLegendData} />
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
