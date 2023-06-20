import React from 'react';
import trapezoidal from '../../lib/trapezoidal';
import LaTex from './Latex';

function TrapezodialEstimation(func, xStart, xEnd, interval) {
    const estimation = trapezoidal(func, xStart, xEnd, interval).toFixed(6);

    return (
        <div className="Estimation">
            <p1>Formula</p1>
            <LaTex tex={func} />
            <br />
            <p1>Estimation</p1>
            <LaTex tex={estimation} />
            <br />
            <p1>Quadrature Function</p1>
            <LaTex tex="\small \int_{x1}^{x3}f(x)dx \approx \frac{1}{3}h(f(x_{1}) + 4f(x_{2}) + f(x_{3}))" />
        </div>
    );
}

export default TrapezodialEstimation;
