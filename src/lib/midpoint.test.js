import numericalDiff from './midpoint';

test('x^2 at x = 3 with h = 0.01', () => {
    // given f(x) = x^2, x = 3, h = 0.01
    // when numericalDiff(f, x, h) is called
    const result = numericalDiff('x^2', 3, 0.01);

    // then the result should be 6.0
    expect(result).toBeCloseTo(6.0, 4);
});

test('x^3+2x^2+3x+4 at x = 2.5 with h = 0.02', () => {
    // given f(x) = x^3+2x^2+3x+4, x = 2.5, h = 0.02
    // when numericalDiff(f, x, h) is called
    const result = numericalDiff('x^3+2x^2+3x+4', 2.5, 0.02);

    // then the result should be 31.7504
    expect(result).toBeCloseTo(31.7504, 4);
});

test('(x^2/(x^3)+1) + (x/(x^2)+4) at x = 0.8 with h = 0.01', () => {
    // given f(x) = (x^2/x^3+1) + (x/x^2+4), x = 0.8, h = 0.01
    // when numericalDiff(f, x, h) is called
    const result = numericalDiff('((x^2)/(x^3+1)) + (x/(x^2+4))', 0.8, 0.01);

    // then the result should be 0.6764704
    expect(result).toBeCloseTo(0.6767407, 7);
});

test('88x^3 at x = 0.25 with h = 0.001', () => {
    // given f(x) = 88x^3, x = 0.25, h = 0.001
    // when numericalDiff(f, x, h) is called
    const result = numericalDiff('88x^3', 0.25, 0.001);

    // then the result should be 16.500088
    expect(result).toBeCloseTo(16.500088, 6);
});

test('sin(x) at x = 0 with h = 0.01', () => {
    // given f(x) = sin(x), x = 0, h = 0.01
    // when numericalDiff(f, x, h) is called
    const result = numericalDiff('sin(x)', 0, 0.01);

    // then the result should be 0.99998 in Radians
    expect(result).toBeCloseTo(0.99998, 4);
});

test('cos(x) at x = 1 with h = 0.01', () => {
    // given f(x) = cos(x), x = 1, h = 0.01
    // when numericalDiff(f, x, h) is called
    const result = numericalDiff('cos(x)', 1, 0.01);

    // then the result should be -0.84145696 in Radians
    expect(result).toBeCloseTo(-0.84145696, 8);
});

test('tan(x) at x = 1 with h = 0.01', () => {
    // given f(x) = tan(x), x = 1, h = 0.01
    // when numericalDiff(f, x, h) is called
    const result = numericalDiff('tan(x)', 1, 0.01);

    // then the result should be 3.426464 in Radians
    expect(result).toBeCloseTo(3.426464, 6);
});

test('e^x at x = 0 with h = 0.01', () => {
    // given f(x) = e^x, x = 2, h = 0.01
    // when numericalDiff(f, x, h) is called
    const result = numericalDiff('e^x', 2, 0.01);

    // then the result should be 7.389179
    expect(result).toBeCloseTo(7.389179, 6);
});
