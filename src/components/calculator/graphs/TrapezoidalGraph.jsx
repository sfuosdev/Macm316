import React, { useEffect } from 'react';
import { create, all } from 'mathjs';
import functionPlot from 'function-plot';
import useGraphState from '../../../hooks/useGraphState';

function TrapezoidalGraph() {
    const [state] = useGraphState();
    const graphState = state.trapezoidal_rule;

    function trapezoidalGraph(funcString, xStart, xEnd, n) {
        const delta = (xEnd - xStart) / n;

        const math = create(all, {});
        const node = math.parse(funcString);
        const f = node.compile();

        const options = {
            target: '#graph',
            width: 1050,
            height: 740,
            xAxis: { domain: [-10, 10] },
            data: [
                {
                    fn: funcString,
                },
            ],
        };

        let m;
        let b;
        let func;
        // create y = mx + b linear graph for each interval
        for (let i = xStart; i <= xEnd - delta; i += delta) {
            m = f.evaluate({ x: i + delta }) - f.evaluate({ x: i });
            m /= delta;
            b = f.evaluate({ x: i }) - m * i;
            func = String(m).concat('x+', String(b));
            options.data.push({
                fn: func,
                range: [i, i + delta],
                skipTip: true,
                closed: true,
                color: 'purple',
            });
        }

        functionPlot(options);
    }

    useEffect(() => {
        trapezoidalGraph(
            graphState.fn,
            graphState.lowerLimit,
            graphState.upperLimit,
            graphState.interval,
        );
    }, [
        graphState.fn,
        graphState.lowerLimit,
        graphState.upperLimit,
        graphState.interval,
    ]);

    return <div id="graph" />;
}

export default TrapezoidalGraph;
