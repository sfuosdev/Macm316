import React from 'react';
import trapezoidal from '../../../lib/trapezoidal';
import LaTex from '../Latex';
import useGraphState from '../../../hooks/useGraphState';

function TrapezodialEstimation() {
    const [state] = useGraphState();
    const estimationState = state.trapezoidal_rule;

    const estimation = trapezoidal(
        estimationState.fn,
        estimationState.lowerLimit,
        estimationState.upperLimit,
        estimationState.interval,
    ).toFixed(6);

    return (
        <div className="Estimation">
            <p>Formula</p>
            <LaTex tex={estimationState.fn} />
            <br />
            <p>Estimation</p>
            <LaTex tex={estimation} />
            <br />
            <p>Quadrature Function</p>
            <LaTex tex="\int_{a}^{b}f(x)dx\approx\frac{(b-a)}{2n}\left[f(x_{0})+2f(x_{1})+\cdots +2f(x_{n-1})+f(x_{n})\right]" />
            <br />
            <p>Actual Estimation</p>
            <LaTex
                tex={`\\int_{${estimationState.lowerLimit}}^{${
                    estimationState.upperLimit
                }}f(x)dx\\approx\\frac{(${
                    estimationState.upperLimit - estimationState.lowerLimit
                })}{2*${
                    estimationState.interval
                }}\\left[f(x_{0})+2f(x_{1})+2f(x_{2})+\\cdots +2f(x_{n-1})+f(x_{n})\\right]`}
            />
        </div>
    );
}

export default TrapezodialEstimation;
