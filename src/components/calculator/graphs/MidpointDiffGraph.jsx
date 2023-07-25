import functionPlot from 'function-plot';
import { create, all } from 'mathjs';
import numericalDiff from '../../../lib/midpoint';

function MidpointDiffGraph(f, x, h) {
    const math = create(all, {});
    const parser = math.parser();

    const m = numericalDiff(f, x, h);
    parser.evaluate(`f(x) = ${f}`);
    const y = parser.evaluate(`f(${x})`);
    const b = y - m * x;
    const midpointDeriv = String(m).concat('x+', String(b));

    const options = {
        target: '#graph',
        width: 1050,
        height: 740,
        xAxis: { domain: [-10, 10] },
        yAxis: { domain: [-10, 30] },
        grid: true,
        data: [
            {
                fn: f,
            },
            {
                fn: midpointDeriv,
            },
        ],
    };

    functionPlot(options);
}

export default MidpointDiffGraph;
