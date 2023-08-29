import React from 'react';
import { lagrangeDiff } from '../../../lib/lagrangeDiff';
import LaTex from '../Latex';
import useGraphState from '../../../hooks/useGraphState';

function LagrangePolynomialDiffEstimation() {
    const [state] = useGraphState();
    const estimationState = state.lagrange_three_points_diff;

    const estimationValue = lagrangeDiff(
        estimationState.fn,
        estimationState.lowerLimit,
        estimationState.interval,
        estimationState.xTarget,
    ).toFixed(6);

    return (
        <div className="Estimation">
            <p>Formula</p>
            <LaTex tex={estimationState.fn} />
            <br />
            {/* <p>Lagrange Polynomial</p>
            <LaTex tex={lagrangePoly} />
            <br /> */}
            <p>Estimation</p>
            <LaTex tex={estimationValue} />
            <br />
            <p>Lagrange Polynomial</p>
            <LaTex tex="L(x_0)=\frac{(x-x_1)(x-x_2)}{(x_0-x_1)(x_0-x_2)}, L(x_1)=\frac{(x-x_0)(x-x_2)}{(x_1-x_0)(x_2-x_1)}, L(x_2)=\frac{(x-x_0)(x-x_1)}{(x_2-x_0)(x_2-x_1)}" />
            <br />
            <LaTex tex="P(x)=f(x_0)L_0(x)+f(x_1)L_1(x)+f(x_2)L_2(x)" />
            <br />
            <p>Actual Estimation</p>
            <LaTex tex="f'(x_j)\approx P'(x_j)" />
            <LaTex tex="=f(x_0)\frac{2x_j-2x_0-3h}{2h^2}-f(x_0+h)\frac{2x_j-2x_0-2h}{h^2}+f(x_0+2h)\frac{2x_j-x_0-h}{2h^2}" />
        </div>
    );
}

export default LagrangePolynomialDiffEstimation;
