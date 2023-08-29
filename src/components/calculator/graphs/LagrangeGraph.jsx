import functionPlot from 'function-plot';
import React, { useEffect } from 'react';
import { create, all } from 'mathjs';
import useGraphState from '../../../hooks/useGraphState';
import { lagrangePolynomial, lagrangeDiff } from '../../../lib/lagrangeDiff';

function LagrangeGraph() {
    const [state] = useGraphState();
    const graphState = state.lagrange_three_points_diff;

    function lagrangeGraph(func, xStart, h, xTarget) {
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
            width: 1050,
            height: 740,
            xAxis: { domain: [-10, 10] },
            yAxis: { domain: [-10, 30] },
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
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        graphState.fn,
        graphState.lowerLimit,
        graphState.interval,
        graphState.xTarget,
    ]);

    return <div id="graph" />;
}

export default LagrangeGraph;
