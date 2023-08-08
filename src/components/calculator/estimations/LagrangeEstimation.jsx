import React from 'react';
import { lagrangeDiff, lagrangePolynomial } from '../../../lib/lagrangeDiff';
import LaTex from '../Latex';

function LatexString(func, estimation, lagrangePoly, latexString) {
    return (
        <div className="Estimation">
            <p>Formula</p>
            <LaTex tex={func} />
            <br />
            {/* <p>Lagrange Polynomial</p>
            <LaTex tex={lagrangePoly} />
            <br /> */}
            <p>Estimation</p>
            <LaTex tex={estimation} />
            <br />
            <p>Quadrature Function</p>
            <LaTex tex="\tiny f'(x_j)\approx f(x_0)\frac{2x_j-2x_0-3h}{2h^2}-f(x_0+h)\frac{2x_j-2x_0-2h}{h^2}+f(x_0+2h)\frac{2x_j-x_0-h}{2h^2}" />
            <br />
            <p>Actual Estimation</p>
            <LaTex tex={latexString} />
        </div>
    );
}

function LagrangeEstimation(func, xStart, h, xTarget) {
    const lagrangePoly = lagrangePolynomial(func, xStart, h);
    const estimation = lagrangeDiff(func, xStart, h, xTarget).toFixed(6);

    const xEval = xTarget;
    // const xLow = (xTarget - h).toFixed(6);
    // const xHigh = (xTarget + h).toFixed(6);
    const piSymbol = 'π';

    let latexString = ``;

    if (xTarget === Math.PI) {
        latexString = `\\tiny f'(${piSymbol})\\approx f(${xStart})\\frac{2(${piSymbol})-2(${xStart})-3(${h})}{2(${h})^2}-f(${piSymbol}+${h})\\frac{2(${xStart})-2(${piSymbol})-2(${h})}{(${h})^2}+f((${xStart})+2(${h}))\\frac{2(${piSymbol})-(${xStart})-(${h})}{2(${h})^2}`;
    } else {
        latexString = `\\tiny f'(${xEval})\\approx f(${xStart})\\frac{2(${xEval})-2(${xStart})-3(${h})}{2(${h})^2}-f(${xEval}+${h})\\frac{2(${xStart})-2(${xEval})-2(${h})}{(${h})^2}+f((${xStart})+2(${h}))\\frac{2(${xEval})-(${xStart})-(${h})}{2(${h})^2}`;
    }
    return LatexString(func, estimation, lagrangePoly, latexString);
}

export default LagrangeEstimation;
