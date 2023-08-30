import functionPlot from 'function-plot';
import React, { useEffect } from 'react';
import { create, all } from 'mathjs';
import useGraphState from '../../../hooks/useGraphState';
import { lagrangePolynomial, lagrangeDiff } from '../../../lib/lagrangeDiff';
import useCalculatorState from '../../../hooks/useCalculatorState';

function LagrangeGraph() {
    const [calculatorState] = useCalculatorState();
    const [state] = useGraphState();
    const graphState = state.lagrange_three_points_diff;

    function lagrangeGraph(func, xStart, h, xTarget, screenWidthOffset) {
        const math = create(all, {});

        const polyFunc = lagrangePolynomial(func, xStart, h);
        const m = lagrangeDiff(func, xStart, h, xTarget);
        const parser = math.parser();
        parser.evaluate(`f(x) = ${func}`);
        const yFunc = parser.evaluate(`f(${xTarget})`);

        const dFunc = yFunc - m * xTarget;

        const estimOnFunc = String(m).concat('x+', String(dFunc));

        const df = math.derivative(func, 'x').evaluate({ x: xTarget });
        const actualDeriv = `${df} * (x-${xTarget}) + ${yFunc}`;

        const options = {
            target: '#graph',
            width: window.innerWidth - screenWidthOffset,
            height: window.innerHeight - 100,
            xAxis: {
                domain: [xStart - 10, xStart + h * 3 + 10],
                label: 'x-axis',
            },
            yAxis: { label: 'y-axis' },
            data: [
                {
                    fn: func,
                    color: 'blue',
                },
                {
                    fn: polyFunc,
                    graphType: 'scatter',
                    nSamples: 500,
                    color: 'red',
                },
                {
                    fn: estimOnFunc,
                    color: 'red',
                },
                {
                    fn: actualDeriv,
                    color: 'green',
                },
            ],
            annotations: [
                {
                    x: xStart,
                    text: 'x0',
                },
                {
                    x: xStart + h,
                    text: 'x1',
                },
                {
                    x: xStart + 2 * h,
                    text: 'x2',
                },
            ],
        };

        functionPlot(options);
    }

    useEffect(() => {
        lagrangeGraph(
            graphState.fn,
            graphState.lowerLimit,
            graphState.interval,
            graphState.xTarget,
            calculatorState.menuWidth,
        );
    }, [
        graphState.fn,
        graphState.lowerLimit,
        graphState.interval,
        graphState.xTarget,
        calculatorState.menuWidth,
    ]);

    return <div id="graph" />;
}

export default LagrangeGraph;
