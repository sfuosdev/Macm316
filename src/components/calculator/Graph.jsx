import React, { useEffect } from 'react';
import functionPlot from 'function-plot';

import useCalculatorState from '../../hooks/useCalculatorState';
import {
    calculatorModes,
    differentiationMethods,
    integrationMethods,
} from '../../context/constants';
// import TrapezoidalGraph from './graphs/TrapezoidalGraph';

setTimeout(() => {
    const graph = document.getElementsByTagName('svg');
    graph[0].setAttribute('viewBox', '0 0 1050 750');
}, 1000);

function Graph() {
    const [calculatorState] = useCalculatorState();

    function drawEmptyGrid() {
        functionPlot({
            target: '#graph',
            width: 1050,
            height: 740,
            yAxis: { domain: [-10, 10] },
            grid: true,
            data: [],
        });
    }

    useEffect(() => {
        setTimeout(drawEmptyGrid, 500);
        setTimeout(() => {
            const graph = document.getElementsByTagName('svg');
            graph[0].setAttribute('viewBox', '0 0 1050 750');
        }, 1000);
    }, []);

    useEffect(() => {
        if (
            calculatorState.mode === calculatorModes.NUMERICAL_DIFFERENTIATION
        ) {
            switch (calculatorState.method) {
                case differentiationMethods.MIDDLE_POINT:
                    break;
                case differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT:
                    break;
                default:
                    break;
            }
        } else if (
            calculatorState.mode === calculatorModes.NUMERICAL_INTEGRATION
        ) {
            switch (calculatorState.method) {
                case integrationMethods.MIDPOINT_RULE:
                    break;
                case integrationMethods.SIMPSON_RULE:
                    break;
                case integrationMethods.TRAPEZOIDAL_RULE:
                    // TrapezoidalGraph('5*sin(x)', 0, 2, 10);
                    break;
                default:
                    break;
            }
        }
        return null;
    }, [calculatorState.mode, calculatorState.method]);

    return <div id="graph" />;
}

export default Graph;
