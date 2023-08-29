import React from 'react';
import numericalDiff from '../../../lib/midpoint';
import LaTex from '../Latex';
import useGraphState from '../../../hooks/useGraphState';

function MiddlePointEstimation() {
    const [state] = useGraphState();
    const estimationState = state.middle_point_diff;

    const estimation = numericalDiff(
        estimationState.fn,
        estimationState.lowerLimit,
        estimationState.interval,
    ).toFixed(6);

    const x0 = (
        estimationState.lowerLimit -
        estimationState.interval / 2
    ).toFixed(0);
    const xn = (
        estimationState.lowerLimit +
        estimationState.interval / 2
    ).toFixed(0);
    const fixedH = 2 * estimationState.interval.toFixed(1);

    const latexString = `f'(x_j) \\approx \\frac{f(${xn}) - f(${x0})}{${fixedH}})`;

    return (
        <div className="Estimation">
            <p>Formula</p>
            <LaTex tex={estimationState.fn} />
            <br />
            <p>Estimation</p>
            <LaTex tex={`f'(x_j) \\approx ${estimation}`} />
            <br />
            <p>Differentiation Function</p>
            <LaTex tex="f'(x_j) \approx \frac{f(x + h) - f(x - h)}{2h}" />
            <br />
            <p>Actual Estimation</p>
            <LaTex tex={latexString} />
        </div>
    );
}

export default MiddlePointEstimation;
