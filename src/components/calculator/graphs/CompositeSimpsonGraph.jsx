import React from 'react';
import functionPlot from 'function-plot';

setTimeout(() => {
    functionPlot({
        target: '#graph',
        width: 1050,
        height: 740,
        yAxis: { domain: [-10, 10] },
        grid: true,
        data: [
            {
                fn: 'log(x)',
            },
        ],
    });
}, 500);

setTimeout(() => {
    const graph = document.getElementsByTagName('svg');
    graph[0].setAttribute('viewBox', '0 0 1050 750');
}, 1000);

function CompositeSimpsonGraph() {
    return <div id="graph" />;
}

export default CompositeSimpsonGraph;
