import { lagrangePolynomial, lagrangeDiff } from '../../lib/lagrangeDiff';

// lagrangeDiff(f, xStart, h) tests
describe('lagrangePolynomial', () => {
    it('should compute the correct string representation for f(x) = x^2, xStart = 0, h = 1, xTarget = 3', () => {
        const f = 'x^2';
        const xStart = 0;
        const h = 1;

        const actual = lagrangePolynomial(f, xStart, h);
        const expected =
            '0 * (2*x-2*0-3*1)/(2*1*1) - 1 * (2*x-2*0-2*1)/(1*1) + 4 * (2*x-2*0-1)/(2*1*1)';
        expect(actual).toBe(expected);
    });

    it('should work with diffrent h', () => {
        const f = 'x^2';
        const xStart = 0;
        const h = 0.1;

        const actual = lagrangePolynomial(f, xStart, h);
        const expected =
            '0 * (2*x-2*0-3*0.1)/(2*0.1*0.1) - 0.01 * (2*x-2*0-2*0.1)/(0.1*0.1) + 0.04 * (2*x-2*0-1)/(2*0.1*0.1)';
        expect(actual).toBe(expected);
    });

    it('should work with polynomial x', () => {
        const f = '2x^2 + 3x + 6';
        const xStart = 0;
        const h = 1;

        const actual = lagrangePolynomial(f, xStart, h);
        const expected =
            '6 * (2*x-2*0-3*1)/(2*1*1) - 11 * (2*x-2*0-2*1)/(1*1) + 20 * (2*x-2*0-1)/(2*1*1)';
        expect(actual).toBe(expected);
    });

    it('should work with trig functions', () => {
        const f = 'sin(x)';
        const xStart = 0;
        const h = 1;

        const actual = lagrangePolynomial(f, xStart, h);
        const expected =
            '0 * (2*x-2*0-3*1)/(2*1*1) - 0.841471 * (2*x-2*0-2*1)/(1*1) + 0.909297 * (2*x-2*0-1)/(2*1*1)';
        expect(actual).toBe(expected);
    });

    it('should work with natuarla log', () => {
        const f = 'e^x';
        const xStart = 0;
        const h = 1;

        const actual = lagrangePolynomial(f, xStart, h);
        const expected =
            '1 * (2*x-2*0-3*1)/(2*1*1) - 2.71828 * (2*x-2*0-2*1)/(1*1) + 7.38906 * (2*x-2*0-1)/(2*1*1)';
        expect(actual).toBe(expected);
    });

    it('should return empty string when f is empty string', () => {
        const f = '';
        const xStart = 0;
        const h = 1;

        const actual = lagrangePolynomial(f, xStart, h);
        const expected = '';
        expect(actual).toBe(expected);
    });
});

describe('lagrangeDiff', () => {
    it('should return empty string when f is empty string', () => {
        const f = '';
        const xStart = 0;
        const h = 1;
        const xTarget = 3;

        const actual = lagrangeDiff(f, xStart, h, xTarget);
        const expected = '';

        expect(actual).toBe(expected);
    });
    it('should return the derivative of the lagrange polynomial at xTarget', () => {
        const f = 'x^2';
        const xStart = 0;
        const h = 1;
        const xTarget = 1;

        const actual = lagrangeDiff(f, xStart, h, xTarget);
        const expected = 2;

        expect(actual).toBe(expected);
    });

    it('should still work using arbitrary xTarget with same f, h', () => {
        const f = 'x^2';
        const xStart = 0;
        const h = 1;
        const xTarget = 5;

        const actual = lagrangeDiff(f, xStart, h, xTarget);
        const expected = 10;

        expect(actual).toBe(expected);
    });

    it('should work with non-integer xTarget', () => {
        const f = 'x^2';
        const xStart = 0;
        const h = 1;
        const xTarget = 1.5;

        const actual = lagrangeDiff(f, xStart, h, xTarget);
        const expected = 3;

        expect(actual).toBe(expected);
    });

    it('should work with non-integer h', () => {
        const f = 'x^3';
        const xStart = 0;
        const h = 0.2;
        const xTarget = 0.3;

        const actual = lagrangeDiff(f, xStart, h, xTarget);
        const expected = -0.36;

        expect(actual).toBeCloseTo(expected, 2);
    });

    it('should return correct derivative when f is polynomial', () => {
        const f = 'x^2 + 3 * x - 2';
        const xStart = 0;
        const h = 0.1;
        const xTarget = 0.05;

        const actual = lagrangeDiff(f, xStart, h, xTarget);
        const expected = 64.3;

        expect(actual).toBeCloseTo(expected, 2);
    });

    it('should return correct derivative when f is trig function', () => {
        const f = 'sin(x)';
        const xStart = 0;
        const h = Math.PI / 2;
        const xTarget = 1;

        const actual = lagrangeDiff(f, xStart, h, xTarget);
        const expected = 0.46267;

        expect(actual).toBeCloseTo(expected, 6);
    });

    it('should return correct derivative when f is naturial log', () => {
        const f = 'e^x';
        const xStart = 0;
        const h = 0.2;
        const xTarget = 0;

        const actual = lagrangeDiff(f, xStart, h, xTarget);
        const expected = -13.93375;

        expect(actual).toBeCloseTo(expected, 6);
    });

    it('should return NaN when h is 0', () => {
        const f = 'x^3';
        const xStart = 0;
        const h = 0;
        const xTarget = 2;

        const actual = lagrangeDiff(f, xStart, h, xTarget);

        expect(actual).toBeNaN();
    });
});
