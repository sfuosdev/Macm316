import useCalculatorState from '../../hooks/useCalculatorState';
import {
    calculatorModes,
    integrationMethods,
    differentiationMethods,
} from '../../context/constants';
import TrapezoidalGraph from './graphs/TrapezoidalGraph';
import MiddlePointDiffGraph from './graphs/MiddlePointDiffGraph';
import CompositeSimpsonGraph from './graphs/CompositeSimpsonGraph';

function DifferntiationGraphComponent(method) {
    switch (method) {
        case differentiationMethods.MIDDLE_POINT:
            return MiddlePointDiffGraph();
        case differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT:
            // Lagrange function call
            return null;
        default:
            return null;
    }
}

function IntegrationGraphComponent(method) {
    switch (method) {
        case integrationMethods.MIDPOINT_RULE:
            // midpointGraph
            break;
        case integrationMethods.SIMPSON_RULE:
            return CompositeSimpsonGraph();
        case integrationMethods.TRAPEZOIDAL_RULE:
            return TrapezoidalGraph();
        default:
            return null;
    }
}

function GraphingCalculator() {
    const [state] = useCalculatorState();

    switch (state.mode) {
        case calculatorModes.NUMERICAL_INTEGRATION:
            return IntegrationGraphComponent(state.method);
        case calculatorModes.NUMERICAL_DIFFERENTIATION:
            return DifferntiationGraphComponent(state.method);
        default:
            return null;
    }
}

export default GraphingCalculator;
