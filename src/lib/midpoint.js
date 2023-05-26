// midpoint rule
// def numericalDiff(f, x, h): return (f(x+h) - f(x-h)) / (2*h)

import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);

const parser = math.parser();

function numericalDiff(f, x, h) {
    parser.evaluate(`f(x) = ${f}`);

    const fPlus = parser.evaluate(`f(${x + h})`);
    const fMinus = parser.evaluate(`f(${x - h})`);

    return (fPlus - fMinus) / (2 * h);
}

export default numericalDiff;
