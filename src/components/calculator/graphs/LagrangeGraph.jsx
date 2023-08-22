import functionPlot from 'function-plot';
import React, { useEffect } from 'react';
import { create, all } from 'mathjs';
import useGraphState from '../../../hooks/useGraphState';
import { lagrangePolynomial, lagrangeDiff } from '../../../lib/lagrangeDiff';

function LagrangeGraph() {
    const [state] = useGraphState();
    const graphState = state.lagrange_polynomial_three_point;

    function EvaluateLagrange(f, xStart, h, x) {
        const math = create(all, {});
        const parser = math.parser();

        const lagrangeExpr = lagrangePolynomial(f, xStart, h);
        parser.evaluate(`L(x) = ${lagrangeExpr}`);

        return parser.evaluate(`L(${x})`);
    }

    function lagrangeGraph(func, xStart, h) {
        const xTarget = xStart + h;
        const m = lagrangeDiff(func, xStart, h);
        const yTarget = EvaluateLagrange(func, xStart, h, xTarget);
        const b = yTarget - m * xTarget;
        const lagrangeDeriv = String(m).concat('x+', String(b));

        const options = {
            target: '#graph',
            width: 1050,
            height: 740,
            xAxis: { domain: [-10, 10] },
            yAxis: { domain: [-10, 30] },
            grid: true,
            data: [
                {
                    fn: func,
                },
                {
                    fn: lagrangeDeriv,
                },
            ],
        };

        functionPlot(options);
    }

    useEffect(() => {
        lagrangeGraph(graphState.func, graphState.xStart, graphState.h);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [graphState.func, graphState.xStart, graphState.h]);

    return <div id="graph" />;
}

export default LagrangeGraph;
