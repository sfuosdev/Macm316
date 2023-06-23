import React from 'react';
import trapezoidal from '../../lib/trapezoidal';
import LaTex from './Latex';

function TrapezodialEstimation(func, xStart, xEnd, interval) {
    const estimation = trapezoidal(func, xStart, xEnd, interval).toFixed(6);

    const x0 = (xStart + 0).toFixed(0);
    const xn = (xEnd + 0).toFixed(0);
    const delta = (xEnd - xStart) / interval;
    const h = 2 * interval;
    const x1 = (xStart + delta).toFixed(1);
    const x2 = (xEnd - delta).toFixed(1);

    if (interval > 3) {
        const latexString = `\\scriptsize\\int_{${x0}}^{${xn}}f(x)dx\\approx\\frac{(${xn}-${x0})}{${h}}\\left[f(${x0})+2f(${x1})+\\cdots +2f(${x2})+f(${xn})\\right]`;

        return (
            <div className="Estimation">
                <p>Formula</p>
                <LaTex tex={func} />
                <br />
                <p>Estimation</p>
                <LaTex tex={estimation} />
                <br />
                <p>Quadrature Function</p>
                <LaTex tex="\tiny\int_{a}^{b}f(x)dx\approx\frac{(b-a)}{2n}\left[f(x_{0})+2f(x_{1})+2f(x_{2})+\cdots +2f(x_{n-1})+f(x_{n})\right]" />
                <br />
                <p>Actual Estimation</p>
                <LaTex tex={latexString} />
            </div>
        );
    }

    const latexString = `\\scriptsize\\int_{${x0}}^{${xn}}f(x)dx\\approx\\frac{(${xn}-${x0})}{${h}}\\left[f(${x0})+2f(${x1})+2f(${x2})+f(${xn})\\right]`;

    return (
        <div className="Estimation">
            <p>Formula</p>
            <LaTex tex={func} />
            <br />
            <p>Estimation</p>
            <LaTex tex={estimation} />
            <br />
            <p>Quadrature Function</p>
            <LaTex tex="\tiny\int_{a}^{b}f(x)dx\approx\frac{(b-a)}{2n}\left[f(x_{0})+2f(x_{1})+2f(x_{2})+\cdots +2f(x_{n-1})+f(x_{n})\right]" />
            <br />
            <p>Actual Estimation</p>
            <LaTex tex={latexString} />
        </div>
    );
}

export default TrapezodialEstimation;
