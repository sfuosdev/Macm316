import { lagrangePolynomial, lagrangeDiff } from '../../lib/lagrangeDiff';

// lagrangeDiff(f, xStart, h) tests
describe('lagrangePolynomial(f, xStart, h)', () => {
    it('should return the lagrange polynomial as a string', () => {
        const f = 'x^2';
        const xStart = 0;
        const h = 1;

        const actual = lagrangePolynomial(f, xStart, h);
        const expected =
            '0 * (x - 1) * (x - 2) / ((0 - 1) * (0 - 2)) + 1 * (x - 0) * (x - 2) / ((1 - 0) * (1 - 2)) + 4 * (x - 0) * (x - 1) / ((2 - 0) * (2 - 1))';

        expect(actual).toBe(expected);
    });

    it('should return the polynomial with non-integer h', () => {
        const f = 'x^2';
        const xStart = 1;
        const h = 0.5;

        const actual = lagrangePolynomial(f, xStart, h);
        const expected =
            '1 * (x - 1.5) * (x - 2) / ((1 - 1.5) * (1 - 2)) + 2.25 * (x - 1) * (x - 2) / ((1.5 - 1) * (1.5 - 2)) + 4 * (x - 1) * (x - 1.5) / ((2 - 1) * (2 - 1.5))';

        expect(actual).toEqual(expected);
    });

    it('should return the polynomial when f is polynomial', () => {
        const f = '2 * x + 1';
        const xStart = 0;
        const h = 1;

        const actual = lagrangePolynomial(f, xStart, h);
        const expected =
            '1 * (x - 1) * (x - 2) / ((0 - 1) * (0 - 2)) + 3 * (x - 0) * (x - 2) / ((1 - 0) * (1 - 2)) + 5 * (x - 0) * (x - 1) / ((2 - 0) * (2 - 1))';

        expect(actual).toEqual(expected);
    });

    it('should return the polynomial with trig functions', () => {
        const f = 'sin(x)';
        const xStart = 0;
        const h = 0.5;

        const actual = lagrangePolynomial(f, xStart, h);
        const expected =
            '0 * (x - 0.5) * (x - 1) / ((0 - 0.5) * (0 - 1)) + 0.479425538604203 * (x - 0) * (x - 1) / ((0.5 - 0) * (0.5 - 1)) + 0.8414709848078965 * (x - 0) * (x - 0.5) / ((1 - 0) * (1 - 0.5))';

        expect(actual).toEqual(expected);
    });

    it('should return the polynomial with natural log', () => {
        const f = 'e^x';
        const xStart = 0;
        const h = 0.5;

        const actual = lagrangePolynomial(f, xStart, h);
        const expected =
            '1 * (x - 0.5) * (x - 1) / ((0 - 0.5) * (0 - 1)) + 1.6487212707001282 * (x - 0) * (x - 1) / ((0.5 - 0) * (0.5 - 1)) + 2.718281828459045 * (x - 0) * (x - 0.5) / ((1 - 0) * (1 - 0.5))';

        expect(actual).toEqual(expected);
    });

    it('should return an empty string when f is empty', () => {
        const f = '';
        const xStart = 0;
        const h = 1;

        const actual = lagrangePolynomial(f, xStart, h);
        const expected = '';

        expect(actual).toEqual(expected);
    });
});

// lagrangeDiff(f, xStart, h, xTarget) tests
describe('lagrangeDiff(f, h, xTarget)', () => {
    it('should return the derivative of the lagrange polynomial at xTarget', () => {
        const f = 'x^2';
        const h = 1;
        const xTarget = 1;

        const actual = lagrangeDiff(f, h, xTarget);
        const expected = 2;

        expect(actual).toBe(expected);
    });

    it('should still work using arbitrary xTarget with same f, h', () => {
        const f = 'x^2';
        const h = 1;
        const xTarget = 5;

        const actual = lagrangeDiff(f, h, xTarget);
        const expected = 10;

        expect(actual).toBe(expected);
    });

    it('should work with non-integer xTarget', () => {
        const f = 'x^2';
        const h = 1;
        const xTarget = 1.5;

        const actual = lagrangeDiff(f, h, xTarget);
        const expected = 3;

        expect(actual).toBe(expected);
    });

    it('should work with non-integer h', () => {
        const f = 'x^3';
        const h = 0.2;
        const xTarget = 2;

        const actual = lagrangeDiff(f, h, xTarget);
        const expected = 12.04;

        expect(actual).toBeCloseTo(expected, 2);
    });

    it('should return correct derivative when f is polynomial', () => {
        const f = 'x^2 + 3 * x - 2';
        const h = 0.1;
        const xTarget = 1.5;

        const actual = lagrangeDiff(f, h, xTarget);
        const expected = 6.0;

        expect(actual).toBeCloseTo(expected, 2);
    });

    it('should return correct derivative when f is trig function', () => {
        const f = 'sin(x)';
        const h = 0.1;
        const xTarget = 1;

        const actual = lagrangeDiff(f, h, xTarget);
        const expected = 0.53940220517;

        expect(actual).toBeCloseTo(expected, 6);
    });

    it('should return correct derivative when f is naturial log', () => {
        const f = 'e^x';
        const h = 0.2;
        const xTarget = 0;

        const actual = lagrangeDiff(f, h, xTarget);
        const expected = 1.00668;

        expect(actual).toBeCloseTo(expected, 6);
    });

    it('should return NaN when h is 0', () => {
        const f = 'x^3';
        const h = 0;
        const xTarget = 2;

        const actual = lagrangeDiff(f, h, xTarget);

        expect(actual).toBeNaN();
    });
});
