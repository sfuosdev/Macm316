import React from 'react';
import trapezoidal from '../../lib/trapezoidal';
import LaTex from './Latex';

function LatexString(
    func,
    x0,
    x1,
    x2,
    xn,
    h,
    interval,
    estimation,
    latexString,
) {
    if (interval > 3) {
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
    let latex = latexString;
    latex = `\\scriptsize\\int_{${x0}}^{${xn}}f(x)dx\\approx\\frac{(${xn}-${x0})}{${h}}\\left[f(${x0})+2f(${x1})+2f(${x2})+f(${xn})\\right]`;

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
            <LaTex tex={latex} />
        </div>
    );
}

function PIString(
    piAtStart,
    func,
    x0,
    x1,
    x2,
    xn,
    h,
    interval,
    estimation,
    latexString,
) {
    if (piAtStart === true) {
        return LatexString(
            func,
            x0,
            x1,
            x2,
            xn,
            h,
            interval,
            estimation,
            latexString,
        );
    }
    return LatexString(
        func,
        x0,
        x1,
        x2,
        xn,
        h,
        interval,
        estimation,
        latexString,
    );
}

function TrapezodialEstimation(func, xStart, xEnd, interval) {
    const estimation = trapezoidal(func, xStart, xEnd, interval).toFixed(6);

    const x0 = (xStart + 0).toFixed(0);
    const xn = (xEnd + 0).toFixed(0);
    const delta = (xEnd - xStart) / interval;
    const h = 2 * interval;
    const x1 = (xStart + delta).toFixed(1);
    const x2 = (xEnd - delta).toFixed(1);

    let latexString = `\\scriptsize\\int_{${x0}}^{${xn}}f(x)dx\\approx\\frac{(${xn}-${x0})}{${h}}\\left[f(${x0})+2f(${x1})+\\cdots +2f(${x2})+f(${xn})\\right]`;
    let isPI = false;

    if (xStart !== Math.PI && xEnd !== Math.PI) {
        return LatexString(
            func,
            x0,
            x1,
            x2,
            xn,
            h,
            interval,
            estimation,
            latexString,
        );
    }
    if (xStart === Math.PI) {
        latexString = `\\scriptsize\\int_{\\pi}^{${xn}}f(x)dx\\approx\\frac{(${xn}-\\pi)}{${h}}\\left[f(\\pi)+2f(${x1})+\\cdots +2f(${x2})+f(${xn})\\right]`;
        isPI = true;
    } else if (xEnd === Math.PI) {
        latexString = `\\scriptsize\\int_{${x0}}^{\\pi}f(x)dx\\approx\\frac{(\\pi-${x0})}{${h}}\\left[f(${x0})+2f(${x1})+\\cdots +2f(${x2})+f(\\pi)\\right]`;
    }
    return PIString(
        isPI,
        func,
        x0,
        x1,
        x2,
        xn,
        h,
        interval,
        estimation,
        latexString,
    );
}

export default TrapezodialEstimation;
