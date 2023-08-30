import React, { useEffect } from 'react';
import functionPlot from 'function-plot';
import { create, all } from 'mathjs';
import numericalDiff from '../../../lib/midpoint';
import useGraphState from '../../../hooks/useGraphState';
import useCalculatorState from '../../../hooks/useCalculatorState';

function MiddlePointDiffGraph() {
    const [calculatorState] = useCalculatorState();
    const [state] = useGraphState();
    const graphState = state.middle_point_diff;

    function middlePointDiffGraph(f, x, h, screenWidthOffset) {
        const math = create(all, {});

        const m = numericalDiff(f, x, h);
        const midpointDeriv = `${m}(x-${x + h})+(${math.evaluate(f, {
            x: x + h,
        })})`;

        const actualM = math.derivative(f, 'x').evaluate({ x });
        const actualDeriv = `${actualM}(x-${x})+(${math.evaluate(f, { x })})`;

        const options = {
            target: '#graph',
            width: window.innerWidth - screenWidthOffset,
            height: window.innerHeight - 100,
            xAxis: {
                domain: [x - 10, x + 10],
                label: 'x-axis',
            },
            yAxis: { label: 'y-axis' },
            grid: false,
            data: [
                {
                    fn: f,
                },
                {
                    fn: midpointDeriv,
                    color: 'red',
                },
                {
                    fn: actualDeriv,
                    color: 'green',
                },
            ],
            annotations: [
                {
                    x: x - h,
                    text: 'x-h',
                },
                {
                    x: x + h,
                    text: 'x+h',
                },
            ],
        };

        functionPlot(options);
    }

    useEffect(() => {
        middlePointDiffGraph(
            graphState.fn,
            graphState.lowerLimit,
            graphState.interval,
            calculatorState.menuWidth,
        );
    }, [
        graphState.fn,
        graphState.lowerLimit,
        graphState.interval,
        calculatorState.menuWidth,
    ]);

    return <div id="graph" />;
}

export default MiddlePointDiffGraph;
