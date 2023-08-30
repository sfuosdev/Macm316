import React, { useEffect } from 'react';
import { create, all } from 'mathjs';
import functionPlot from 'function-plot';
import useGraphState from '../../../hooks/useGraphState';
import useCalculatorState from '../../../hooks/useCalculatorState';

function TrapezoidalGraph() {
    const [calculatorState] = useCalculatorState();
    const [state] = useGraphState();
    const graphState = state.trapezoidal_rule;

    function trapezoidalGraph(funcString, xStart, xEnd, n, screenWidthOffset) {
        const delta = (xEnd - xStart) / n;

        const math = create(all, {});
        const node = math.parse(funcString);
        const f = node.compile();

        const options = {
            target: '#graph',
            width: window.innerWidth - screenWidthOffset,
            height: window.innerHeight - 100,
            xAxis: {
                domain: [xStart - 10, xEnd + 10],
                label: 'x-axis',
            },
            yAxis: { label: 'y-axis' },
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
            calculatorState.menuWidth,
        );
    }, [
        graphState.fn,
        graphState.lowerLimit,
        graphState.upperLimit,
        graphState.interval,
        calculatorState.menuWidth,
    ]);

    return <div id="graph" />;
}

export default TrapezoidalGraph;
