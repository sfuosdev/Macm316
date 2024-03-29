import { create, all, parse } from 'mathjs';

const config = {};
const math = create(all, config);

const parser = math.parser();

function lagrangePolynomial(f, xStart, h) {
    if (f === '') return '';

    parser.evaluate(`f(x) = ${f}`);

    const xMid = xStart + h;
    const xEnd = xStart + 2 * h;

    const l0 = `((x-${xMid})*(x-${xEnd})) / ((${xStart}-${xMid})*(${xStart}-${xEnd}))`;
    const l1 = `((x-${xStart})*(x-${xEnd})) / ((${xMid}-${xStart})*(${xMid}-${xEnd}))`;
    const l2 = `((x-${xStart})*(x-${xMid})) / ((${xEnd}-${xStart})*(${xEnd}-${xMid}))`;

    const yStart = math.format(parser.evaluate(`f(${xStart})`), {
        precision: 6,
    });
    const yMid = math.format(parser.evaluate(`f(${xMid})`), { precision: 6 });
    const yEnd = math.format(parser.evaluate(`f(${xEnd})`), { precision: 6 });

    const polynomial = `${yStart}*${l0} + ${yMid}*${l1} + ${yEnd}*${l2}`;

    return polynomial;
}

function lagrangePolynomialDeriv(f, xStart, h) {
    if (f === '') return '';

    parser.evaluate(`f(x) = ${f}`);

    const xMid = xStart + h;
    const xEnd = xStart + 2 * h;

    const yStart = math.format(parser.evaluate(`f(${xStart})`), {
        precision: 6,
    });
    const yMid = math.format(parser.evaluate(`f(${xMid})`), { precision: 6 });
    const yEnd = math.format(parser.evaluate(`f(${xEnd})`), { precision: 6 });

    const lStart = `(2*x-2*${xStart}-3*${h})/(2*${h}*${h})`;
    const lMid = `(2*x-2*${xStart}-2*${h})/(${h}*${h})`;
    const lEnd = `(2*x-2*${xStart}-1)/(2*${h}*${h})`;

    const lagrange = `${yStart} * ${lStart} - ${yMid} * ${lMid} + ${yEnd} * ${lEnd}`;

    return lagrange;
}

function lagrangeDiff(f, xStart, h, xTarget) {
    if (f === '') return '';

    const lagrangeExpr = lagrangePolynomialDeriv(f, xStart, h);
    const node = parse(lagrangeExpr);
    const derivateive = node.compile();

    return derivateive.evaluate({ x: xTarget });
}

export { lagrangePolynomial, lagrangePolynomialDeriv, lagrangeDiff };
