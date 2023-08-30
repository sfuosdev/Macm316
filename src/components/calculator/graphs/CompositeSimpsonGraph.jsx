import React, { useEffect } from 'react';
import { create, all } from 'mathjs';
import functionPlot from 'function-plot';
import useGraphState from '../../../hooks/useGraphState';
import useCalculatorState from '../../../hooks/useCalculatorState';

function CompositeSimpsonGraph() {
    const [calculatorState] = useCalculatorState();
    const [state] = useGraphState();
    const graphState = state.simpson_rule;

    function compositeSimpsonGraph(
        funcString,
        xStart,
        xEnd,
        n,
        screenWidthOffset,
    ) {
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
            annotations: [],
        };

        const h = (xEnd - xStart) / n;
        let count = 0;
        for (let i = xStart + h; i <= xEnd; i += 2 * h) {
            const a = i - h;
            const m = i;
            let b = i + h;

            const fa = f.evaluate({ x: a });
            const fm = f.evaluate({ x: m });
            const fb = f.evaluate({ x: b });

            const c = fa / ((a - m) * (a - b));
            const d = fm / ((m - a) * (m - b));
            const e = fb / ((b - a) * (b - m));

            const first = c + d + e;
            const second = c * (m + b) + d * (a + b) + e * (a + m);
            const third = c * m * b + d * a * b + e * a * m;

            const P = String(first).concat(
                'x^2-',
                String(second),
                'x+',
                String(third),
            );

            if (i === xEnd) {
                b = xEnd;
            }

            options.data.push({
                fn: P,
                range: [a, b],
                closed: true,
                color: 'purple',
            });
            options.annotations.push({
                x: i - h,
                text: `P${count}`,
            });
            count += 1;
        }

        options.annotations.push({
            x: xEnd,
        });

        functionPlot(options);
    }

    useEffect(() => {
        compositeSimpsonGraph(
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

export default CompositeSimpsonGraph;
