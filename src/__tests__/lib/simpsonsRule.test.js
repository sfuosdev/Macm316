import simpsonsRule from '../../lib/simpsonsRule';

test('x^2 from 1 to 5 with 2 subintervals', () => {
    const res = simpsonsRule('x^2', 1, 5, 2);
    expect(res).toBeCloseTo(41.333333);
});

test('x^2 from 1 to 5 with 3 subintervals', () => {
    const res = simpsonsRule('x^2', 1, 5, 3);
    expect(res).toBeCloseTo(41.333333);
});

test('x^3 from 0 to 3 with 4 subintervals', () => {
    const res = simpsonsRule('x^3', 0, 3, 4);
    expect(res).toBeCloseTo(20.25);
});

test('2^x from 0 to 3 with 4 subintervals', () => {
    const res = simpsonsRule('2^x', -1, 3, 5);
    expect(res).toBeCloseTo(10.8333);
});

test('1/x from 1 to 5 with 10 subintervals', () => {
    const res = simpsonsRule('1/x', 1, 5, 10);
    expect(res).toBeCloseTo(1.609487);
});

test('1/(1+x^2) from 0 to 1 with 10 subintervals', () => {
    const res = simpsonsRule('1/(1+x^2)', 0, 1, 10);
    expect(res).toBeCloseTo(0.785398);
});

test('3x-x^2 from 0 to 3 with 3 subintervals', () => {
    const res = simpsonsRule('3x-x^2', 0, 3, 3);
    expect(res).toBeCloseTo(4.5);
});

test('-3x^3+11x^2-4 from 0 to 5 with 7 subintervals', () => {
    const res = simpsonsRule('-3x^3+11x^2-4', 0, 5, 7);
    expect(res).toBeCloseTo(-30.416);
});

test('sqrt(x) from 0 to 2 with 4 subintervals', () => {
    const res = simpsonsRule('sqrt(x)', 0, 2, 4);
    expect(res).toBeCloseTo(1.856936695447607);
});

test('sqrt(x^3-1) from 1 to 2 with 3 subintervals', () => {
    const res = simpsonsRule('sqrt(x^3-1)', 1, 2, 3);
    expect(res).toBeCloseTo(1.468360885672261);
});

test('sin(x) from 0 to pi with 4 subintervals', () => {
    const res = simpsonsRule('sin(x)', 0, Math.PI, 4);
    expect(res).toBeCloseTo(2.000269);
});

test('(sin(x))^2 from 0 to pi with 6 subintervals', () => {
    const res = simpsonsRule('(sin(x))^2', 0, Math.PI, 6);
    expect(res).toBeCloseTo(1.570796);
});

test('6+3cos(x) from 0 to pi/2 with 2 subintervals', () => {
    const res = simpsonsRule('6+3cos(x)', 0, Math.PI / 2, 2);
    expect(res).toBeCloseTo(12.431);
});

test('tan(x) from 0 to pi/3 with 3 subintervals', () => {
    const res = simpsonsRule('tan(x)', 0, Math.PI / 3, 3);
    expect(res).toBeCloseTo(0.705366419430668);
});

test('e^-x^3 from 0 to 1 with 10 subintervals', () => {
    const res = simpsonsRule('e^-x^3', 0, 1, 10);
    expect(res).toBeCloseTo(0.807518914393854);
});

test('e^x*cos(x^2) from -1 to 4 with 12 subintervals', () => {
    const res = simpsonsRule('e^x*cos(x^2)', -1, 4, 12);
    expect(res).toBeCloseTo(9.325537035769962);
});
