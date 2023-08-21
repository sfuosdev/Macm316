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

        const xDomainSize = 10;

        const options = {
            target: '#graph',
            width: 1050,
            height: 740,
            xAxis: {
                domain: [x - xDomainSize, x + xDomainSize],
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
                },
            ],
            annotations: [
                {
                    x: x - h,
                    text: 'x-h',
                },
                {
                    x,
                },
                {
                    x: x + h,
                    text: 'x+h',
                },
                {
                    y: math.evaluate(f, { x: x - h }),
                },
                {
                    y: math.evaluate(f, { x: x + h }),
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
