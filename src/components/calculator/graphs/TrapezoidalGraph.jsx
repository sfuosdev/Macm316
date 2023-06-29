import { create, all } from 'mathjs';
import functionPlot from 'function-plot';

function TrapezoidalGraph(funcString, xStart, xEnd, n) {
    const delta = (xEnd - xStart) / n;

    const math = create(all, {});
    const node = math.parse(funcString);
    const f = node.compile();

    const options = {
        target: '#graph',
        width: 1050,
        height: 740,
        xAxis: { domain: [-10, 10] },
        yAxis: { domain: [-10, 30] },
        grid: true,
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
    for (let i = xStart; i < xEnd - delta; i += delta) {
        m = f.evaluate({ x: i + delta }) - f.evaluate({ x: i });
        m /= delta;
        b = f.evaluate({ x: i }) - m * i;
        func = String(m).concat('x+', String(b));
        options.data.push({
            fn: func,
            range: [i, i + delta],
            skipTip: true,
            closed: true,
        });
    }

    functionPlot(options);
}

export default TrapezoidalGraph;
