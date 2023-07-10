import React from 'react';
import useCalculatorState from '../../hooks/useCalculatorState';
import {
    differentiationMethods,
    integrationMethods,
} from '../../context/constants';
import TrapezodialEstimation from './estimations/TrapezoidalEstimation';

function MethodSwitch() {
    const [state] = useCalculatorState();

    function forMethod() {
        switch (state.method) {
            case differentiationMethods.MIDDLE_POINT:
                return <>Midpoint Differentiation</>;
            case differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT:
                return <>Lagrange</>;
            case integrationMethods.MIDPOINT_RULE:
                return <>Midpoint Integration</>;
            case integrationMethods.TRAPEZOIDAL_RULE:
                return TrapezodialEstimation('sin(x)', 0, Math.PI, 10);
            case integrationMethods.SIMPSON_RULE:
                return <>Simpson</>;
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
