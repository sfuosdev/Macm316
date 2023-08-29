import React from 'react';
import useCalculatorState from '../../hooks/useCalculatorState';
import {
    calculatorModes,
    integrationMethods,
    differentiationMethods,
} from '../../context/constants';
import TrapezoidalGraph from './graphs/TrapezoidalGraph';
import MiddlePointDiffGraph from './graphs/MiddlePointDiffGraph';
import CompositeSimpsonGraph from './graphs/CompositeSimpsonGraph';
import LagrangeGraph from './graphs/LagrangeGraph';
import GraphLegend from '../common/GraphLegend';

function DifferntiationGraphComponent(method) {
    switch (method) {
        case differentiationMethods.MIDDLE_POINT:
            return (
                <div>
                    <GraphLegend
                        data={[
                            { color: 'blue', title: 'f(x)' },
                            { color: 'green', title: 'Derivative of f(x)' },
                            {
                                color: 'red',
                                title: 'Approximation to the derivative of f(x)',
                            },
                        ]}
                    />
                    <MiddlePointDiffGraph />
                </div>
            );
        case differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT:
            return (
                <div>
                    <GraphLegend
                        data={[
                            { color: 'blue', title: 'f(x)' },
                            { color: 'green', title: 'Derivative of f(x)' },
                            {
                                color: 'red',
                                title: 'Lagrange Polynomial P(x)',
                                style: 'dotted',
                            },
                            {
                                color: 'red',
                                title: 'Approximation to the derivative of f(x)',
                            },
                        ]}
                    />
                    <LagrangeGraph />
                </div>
            );
        default:
            return null;
    }
}

function IntegrationGraphComponent(method) {
    switch (method) {
        case integrationMethods.SIMPSON_RULE:
            return (
                <div>
                    <GraphLegend
                        data={[
                            { color: 'blue', title: 'f(x)' },
                            {
                                color: 'purple',
                                title: 'Quadratic Polynomials Pi(x)',
                            },
                        ]}
                    />
                    <CompositeSimpsonGraph />
                </div>
            );
        case integrationMethods.TRAPEZOIDAL_RULE:
            return (
                <div>
                    <GraphLegend
                        data={[
                            { color: 'blue', title: 'f(x)' },
                            { color: 'purple', title: 'Trapezoids' },
                        ]}
                    />
                    <TrapezoidalGraph />
                </div>
            );
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
