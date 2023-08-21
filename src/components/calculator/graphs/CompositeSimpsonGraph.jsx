import React, { useEffect } from 'react';
import { create, all } from 'mathjs';
import functionPlot from 'function-plot';
// import useGraphState from '../../../hooks/useGraphState';

function CompositeSimpsonGraph() {
    // const [state] = useGraphState();
    // const graphState = state.simpson_rule;

    function compositeSimpsonGraph(funcString, xStart, xEnd, n) {
        const math = create(all, {});
        const node = math.parse(funcString);
        const f = node.compile();

        const options = {
            target: '#graph',
            width: 1050,
            height: 740,
            xAxis: { domain: [-10, 10] },
            yAxis: { domain: [-10, 10] },
            grid: true,
            data: [
                {
                    fn: funcString,
                },
            ],
        };

        const h = (xEnd - xStart) / n;
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
            });
        }

        functionPlot(options);
    }

    useEffect(() => {
        compositeSimpsonGraph('x^5+2*x^2+3x', -1, 2, 10);
    }, []);

    return <div id="graph" />;
}

export default CompositeSimpsonGraph;
