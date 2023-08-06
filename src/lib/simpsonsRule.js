import { create, all } from 'mathjs';

const math = create(all);
const parser = math.parser();

function simpsonsRule(f, xStart, xEnd, n) {
    parser.evaluate(`f(x) = ${f}`);
    let numOfIntervals = n;

    if (numOfIntervals % 2 !== 0) {
        numOfIntervals -= 1;
    }
    const h = (xEnd - xStart) / numOfIntervals;
    const xValues = [];
    for (let i = 0; i <= numOfIntervals; i += 1) {
        xValues.push(xStart + i * h);
    }
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 1; i < numOfIntervals; i += 1) {
        parser.set('x', xValues[i]);
        const value = parser.evaluate('f(x)');

        if (i % 2 === 0) {
            sumEven += value;
        } else {
            sumOdd += value;
        }
    }
    parser.set('x', xValues[0]);
    const fStart = parser.evaluate('f(x)');
    parser.set('x', xValues[numOfIntervals]);
    const fEnd = parser.evaluate('f(x)');
    const integral = (h / 3) * (fStart + fEnd + 4 * sumOdd + 2 * sumEven);
    return integral;
}

function simpsonsPolynomial(f, xStart, xEnd, n) {
    if (f === '') return '';

    parser.set('xStart', xStart);
    parser.set('xEnd', xEnd);
    parser.set('n', n);

    const h = parser.evaluate('(xEnd - xStart) / n');

    const x = [];

    let simpsons = `${h}/3*(`;

    for (let i = 0; i <= n; i += 1) {
        x[i] = xStart + i * h;
        parser.set('x', x[i]);
    }

    for (let i = 0; i <= n; i += 1) {
        if (i === 0) {
            simpsons += `f(${x[i]}`;
        } else if (i % 2 !== 0) {
            simpsons += `+4*f(${x[i]})`;
        } else if (i === n) {
            simpsons += `+f(${x[i]})`;
        } else {
            simpsons += `+2*f(${x[i]})`;
        }

        if (i === n) {
            simpsons += '';
        } else {
            simpsons += ')';
        }
    }

    simpsons += ')';
    return simpsons;
}

export { simpsonsRule, simpsonsPolynomial };
