import trapezoidal from './trapezoidal';

test('x^2 from 0 to 2 with 3 subintervals', () => {
    // f(x) = x^2, x_start = 0, x_end = 2, interval = 3
    const res = trapezoidal('x^2', 0, 2, 3);
    expect(res).toBeCloseTo(76 / 27, 5);
});

test('x^3 from 0 to 1 with 2 subintervals', () => {
    // f(x) = x^3, x_start = 0, x_end = 1, interval = 2
    const res = trapezoidal('x^3', 0, 1, 2);
    expect(res).toBeCloseTo(5 / 16, 5);
});

test('2^x from -1 to 3 with 4 subintervals', () => {
    // f(x) = 2^x, x_start = -1, x_end = 3, interval = 4
    const res = trapezoidal('2^x', -1, 3, 4);
    expect(res).toBeCloseTo(45 / 4, 5);
});

test('1/x from 1 to 5 with 4 subintervals', () => {
    // f(x) = 1/x, x_start = 1, x_end = 5, interval = 4
    const res = trapezoidal('1/x', 1, 5, 4);
    expect(res).toBeCloseTo(101 / 60, 5);
});

test('1/(1+x^2) from 0 to 1 with 10 subintervals', () => {
    // f(x) = 1/(1+x^2), x_start = 0, x_end = 1, interval = 10
    const res = trapezoidal('1/(1+x^2)', 0, 1, 10);
    expect(res).toBeCloseTo(0.785, 4);
});

test('3x-x^2 from 0 to 3 with 3 subintervals', () => {
    // f(x) = 3x-x^2, x_start = 0, x_end = 3, interval = 3
    const res = trapezoidal('3x-x^2', 0, 3, 3);
    expect(res).toBeCloseTo(4, 5);
});

test('-9x^3+22x^2-1 from 0 to 5 with 5 subintervals', () => {
    // f(x) = -9x^3+22x^2-1, x_start = 0, x_end = 5, interval = 5
    const res = trapezoidal('-9x^3+22x^2-1', 0, 5, 5);
    expect(res).toBeCloseTo(-532.5, 5);
});

test('sqrt(x) from 0 to 2 with 4 subintervals', () => {
    // f(x) = sqrt(x), x_start = 0, x_end = 2, interval = 4
    const res = trapezoidal('sqrt(x)', 0, 2, 4);
    expect(res).toBeCloseTo(1.81948, 5);
});

test('sqrt(x^3-1) from 1 to 2 with 3 subintervals', () => {
    // f(x) = sqrt(x^3-1), x_start = 1, x_end = 2, interval = 3
    const res = trapezoidal('sqrt(x^3-1)', 1, 2, 3);
    expect(res).toBeCloseTo(1.46622, 5);
});

test('sin(x) from 0 to pi with 4 subintervals', () => {
    // f(x) = sin(x), x_start = 0, x_end = pi, interval = 4
    const res = trapezoidal('sin(x)', 0, Math.PI, 4);
    expect(res).toBeCloseTo(1.8961, 4);
});

test('(sin(x))^2 from 0 to pi with 6 subintervals', () => {
    // f(x) = sin^2 (x), x_start = 0, x_end = pi, interval = 6
    const res = trapezoidal('(sin(x))^2', 0, Math.PI, 6);
    expect(res).toBeCloseTo(Math.PI / 2, 5);
});

test('6+3cos(x) from 0 to pi/2 with 2 subintervals', () => {
    // f(x) = 6 + 3cos(x), x_start = 0, x_end = pi/2, interval = 2
    const res = trapezoidal('6+3cos(x)', 0, Math.PI / 2, 2);
    expect(res).toBeCloseTo(12.26896, 5);
});

test('tan(x) from 0 to pi/3 with 3 subintervals', () => {
    // f(x) = tan(x), x_start = 0, x_end = pi/3, interval = 3
    const res = trapezoidal('tan(x)', 0, Math.PI / 3, 3);
    expect(res).toBeCloseTo(0.72225, 5);
});

test('e^-x^3 from 0 to 1 with 10 subintervals', () => {
    // f(x) = e^-x^3, x_start = 0, x_end = 1, interval = 10
    const res = trapezoidal('e^-x^3', 0, 1, 10);
    expect(res).toBeCloseTo(0.80659, 5);
});

test('e^x*cos(x^2) from -1 to 4 with 10 subintervals', () => {
    // f(x) = e^x*cose(x^2), x_start = -1, x_end = 4, interval = 10
    const res = trapezoidal('e^x*cos(x^2)', -1, 4, 10);
    expect(res).toBeCloseTo(-1.84394, 5);
});
