import React from 'react';
import simpsonsRule from '../../../lib/simpsonsRule';
import LaTex from '../Latex';

function SimpsonIntegrationEstimation(func, xStart, xEnd, n) {
    const estimation = simpsonsRule(func, xStart, xEnd, n).toFixed(6);

    const x0 = (xStart + 0).toFixed(0);
    const xn = (xEnd + 0).toFixed(0);
    const h = (xEnd - xStart) / n;
    const x1 = (xStart + h).toFixed(1);
    const x2 = (xEnd - h).toFixed(1);

    const piSymbol = 'π';

    const qfunction = `\\tiny \\int_{a}^{b} f(x) dx \\approx \\frac{h}{3}\\left[f(x_0) + 4f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-2}) + 4f(x_{n-1}) + f(x_n)\\right]`;
    let latexString = ``;

    if (xStart !== Math.PI && xEnd !== Math.PI) {
        latexString = `\\tiny\\int_{${x0}}^{${xn}}f(x)dx\\approx\\frac{${xEnd} - ${xStart}/${n}}{3}\\left[f(${x0})+4f(${x1})+2f(${x2})+\\cdots+4f(${xEnd} - \\frac{${xEnd}-${xStart}}{${n}})+f(${xn})\\right]`;
    }
    if (xStart === Math.PI) {
        latexString = `\\tiny\\int_{${piSymbol}}^{${xn}}f(x)dx\\approx\\frac{${xEnd} - ${xStart}/${n}}{3}\\left[f(${piSymbol})+4f(${x1})+2f(${x2})+\\cdots+4f(${xEnd} - \\frac{(${xEnd} - ${piSymbol})}{${n})}+f(${xn})\\right]`;
    } else if (xEnd === Math.PI) {
        latexString = `\\tiny\\int_{${x0}}^{${piSymbol}}f(x)dx\\approx\\frac{${piSymbol} - ${xStart} / ${n}}{3}\\left[f(${x0})+4f(${x1})+2f(${x2})+\\cdots+4f(${piSymbol} - \\frac{(${piSymbol} - ${xStart})}{${n}})+f(${piSymbol})\\right]`;
    }

    return (
        <div className="Estimation">
            <p>Formula</p>
            <LaTex tex={func} />
            <br />
            <p>Estimation</p>
            <LaTex tex={estimation} />
            <br />
            <p>Simpsons Function</p>
            <LaTex tex={qfunction} />
            <br />
            <p>Actual Estimation</p>
            <LaTex tex={latexString} />
            <br />
        </div>
    );
}

export default SimpsonIntegrationEstimation;
