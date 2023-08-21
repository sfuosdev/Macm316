import React from 'react';
import useCalculatorState from '../../hooks/useCalculatorState';
import {
    differentiationMethods,
    integrationMethods,
} from '../../context/constants';
import TrapezodialEstimation from './estimations/TrapezoidalEstimation';
import SimpsonIntegrationEstimation from './estimations/SimpsonEstimation';
import LagrangeEstimation from './estimations/LagrangeEstimation';

function MethodSwitch() {
    const [state] = useCalculatorState();

    function forMethod() {
        switch (state.method) {
            case differentiationMethods.MIDDLE_POINT:
                return <>Estimation</>;
            case differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT:
                return LagrangeEstimation('sin(x)', 0, 1, Math.PI);
            case integrationMethods.TRAPEZOIDAL_RULE:
                return TrapezodialEstimation('sin(x)', 0, Math.PI, 10);
            case integrationMethods.SIMPSON_RULE:
                return SimpsonIntegrationEstimation('sin(x)', 0, Math.PI, 10);
            default:
                return null;
        }
    }
    return forMethod();
}

function Estimation() {
    return MethodSwitch();
}

export default Estimation;
