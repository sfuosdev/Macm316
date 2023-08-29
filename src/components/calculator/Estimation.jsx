import React from 'react';
import useCalculatorState from '../../hooks/useCalculatorState';
import {
    differentiationMethods,
    integrationMethods,
} from '../../context/constants';
import TrapezodialEstimation from './estimations/TrapezoidalEstimation';
import SimpsonIntegrationEstimation from './estimations/SimpsonEstimation';
import LagrangePolynomialDiffEstimation from './estimations/LagrangeEstimation';
import MiddlePointEstimation from './estimations/MiddlePointEstimation';

function Estimation() {
    const [state] = useCalculatorState();

    switch (state.method) {
        case differentiationMethods.MIDDLE_POINT:
            return <MiddlePointEstimation />;
        case differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT:
            return <LagrangePolynomialDiffEstimation />;
        case integrationMethods.TRAPEZOIDAL_RULE:
            return <TrapezodialEstimation />;
        case integrationMethods.SIMPSON_RULE:
            return SimpsonIntegrationEstimation('sin(x)', 0, Math.PI, 10);
        default:
            return null;
    }
}

export default Estimation;
