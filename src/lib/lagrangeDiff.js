/* 
    numerical differentiation using Lagrange interpolation
    function 1:
    def lagrangePolynomial(f, xStart, h) : return lagrange polynomial as string
    function 2:
    def lagrangeDiff(f, xStart, h, xTarget) : return derivate of lagrange polynomial at xTarget
*/

import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);

const parser = math.parser();

// returns lagrange polynomial as string
function lagrangePolynomial(f, xStart, h) {
    parser.evaluate(`f(x) = ${f}`);

    const xMid = xStart + h;
    const xEnd = xStart + 2 * h;

    // corresponding f(x) values
    const yStart = parser.evaluate(`f(${xStart})`);
    const yMid = parser.evaluate(`f(${xMid})`);
    const yEnd = parser.evaluate(`f(${xEnd})`);

    // L(k, x)
    const lStart = `(x - ${xMid}) * (x - ${xEnd}) / ((${xStart} - ${xMid}) * (${xStart} - ${xEnd}))`;
    const lMid = `(x - ${xStart}) * (x - ${xEnd}) / ((${xMid} - ${xStart}) * (${xMid} - ${xEnd}))`;
    const lEnd = `(x - ${xStart}) * (x - ${xMid}) / ((${xEnd} - ${xStart}) * (${xEnd} - ${xMid}))`;

    // create lagrange polynomial as string
    const lagrange = `${yStart} * ${lStart} + ${yMid} * ${lMid} + ${yEnd} * ${lEnd}`;

    return lagrange;
}

// returns the derivative of the lagrange polynomial at xTarget
function lagrangeDiff(f, h, xTarget) {
    parser.evaluate(`f(x) = ${f}`);

    const xStart = xTarget - h;
    const xEnd = xTarget + h;

    // corresponding f(x) values
    const yStart = parser.evaluate(`f(${xStart})`);
    const yEnd = parser.evaluate(`f(${xEnd})`);

    // apply three-point formula at midpoint
    const derivative = (-yStart + yEnd) / (2 * h);

    return derivative;
}

export { lagrangePolynomial, lagrangeDiff };
