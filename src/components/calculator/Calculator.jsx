import React from 'react';
import functionPlot from 'function-plot';

import useCalculatorState from '../../hooks/useCalculatorState';
import { calculatorModes, integrationMethods } from '../../context/constants';
import TrapezoidalGraph from './graphs/TrapezoidalGraph';

setTimeout(() => {
    functionPlot({
        target: '#graph',
        width: 1050,
        height: 740,
        yAxis: { domain: [-10, 10] },
        grid: true,
        data: [
            {
                fn: 'log(x)',
            },
        ],
    });
}, 500);

setTimeout(() => {
    const graph = document.getElementsByTagName('svg');
    graph[0].setAttribute('viewBox', '0 0 1050 750');
}, 1000);

function IntegrationCalc() {
    const [state] = useCalculatorState();

    switch (state.method) {
        case integrationMethods.MIDPOINT_RULE:
            // midpointGraph
            break;
        case integrationMethods.SIMPSON_RULE:
            // simpsonGraph
            break;
        case integrationMethods.TRAPEZOIDAL_RULE:
            TrapezoidalGraph('5*sin(x)', 0, 2, 10);
            break;
        default:
            return null;
    }
}

function GraphingCalculator(props) {
    const [state] = useCalculatorState();
    if (state.mode === calculatorModes.NUMERICAL_INTEGRATION) {
        IntegrationCalc(props);
    }
    return <div id="graph" />;
}

export default GraphingCalculator;
