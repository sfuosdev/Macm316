import React, { useEffect } from 'react';
import functionPlot from 'function-plot';
import { create, all } from 'mathjs';
import numericalDiff from '../../../lib/midpoint';
import useGraphState from '../../../hooks/useGraphState';

function MiddlePointDiffGraph() {
    const [state] = useGraphState();
    const graphState = state.middle_point_diff;

    function middlePointDiffGraph(f, x, h) {
        const math = create(all, {});

        const m = numericalDiff(f, x, h);
        const midpointDeriv = `${m}(x-${x + h})+(${math.evaluate(f, {
            x: x + h,
        })})`;

        const actualM = math.derivative(f, 'x').evaluate({ x });
        const actualDeriv = `${actualM}(x-${x})+(${math.evaluate(f, { x })})`;

        const options = {
            target: '#graph',
            width: 1050,
            height: 740,
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
        );
    }, [graphState.fn, graphState.lowerLimit, graphState.interval]);

    return <div id="graph" />;
}

export default MiddlePointDiffGraph;
