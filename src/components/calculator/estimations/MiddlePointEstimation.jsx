import React from 'react';
import numericalDiff from '../../../lib/midpoint';
import LaTex from '../Latex';

function LatexStringMiddePoint(func, Estimation, latexString) {
    return (
        <div className="Estimation">
            <p>Formula</p>
            <LaTex tex={func} />
            <br />
            <p>Estimation</p>
            <LaTex tex={Estimation} />
            <br />
            <p>Quadrature Function</p>
            <LaTex tex="\tiny f'(x_0) \approx \frac{f(x + h) - f(x - h)}{2h}" />
            <br />
            <p>Actual Estimation</p>
            <LaTex tex={latexString} />
        </div>
    );
}

function MiddlePointEstimation(func, xStart, h) {
    const estimation = numericalDiff(func, xStart, h).toFixed(6);

    const x0 = (xStart - h / 2).toFixed(0);
    const xn = (xStart + h / 2).toFixed(0);
    const fixedH = 2 * h.toFixed(1);

    const latexString = `\\scriptsize f'(x) \\approx \\frac{f(${xn}) - f(${x0})}{${fixedH}})`;

    return LatexStringMiddePoint(func, estimation, latexString);
}

export default MiddlePointEstimation;
