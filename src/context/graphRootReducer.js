import { differentiationMethods, integrationMethods } from './constants';

import middlePointReducer, {
    initialMiddlePointState,
} from './MiddlePointReducer';
import lagrangeReducer, { initialLagrangeState } from './LagrangeReducer';
import midPointReducer, { initialMidPointState } from './MidPointReducer';
import simpsonReducer, { initialSimpsonState } from './SimpsonReducer';
import trapezoidalReducer, {
    initialTrapezoidalState,
} from './TrapezoidalReducer';

export const initialRootGraphState = {
    [differentiationMethods.MIDDLE_POINT]: initialMiddlePointState,
    [differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT]:
        initialLagrangeState,
    [integrationMethods.MIDPOINT_RULE]: initialMidPointState,
    [integrationMethods.SIMPSON_RULE]: initialSimpsonState,
    [integrationMethods.TRAPEZOIDAL_RULE]: initialTrapezoidalState,
};

/* eslint-disable default-param-last */
function rootReducer(state = initialRootGraphState, action) {
    /* eslint-enable default-param-last */
    switch (state.method) {
        case differentiationMethods.MIDDLE_POINT:
            return {
                ...state,
                [differentiationMethods.MIDDLE_POINT]: middlePointReducer(
                    state[differentiationMethods.MIDDLE_POINT],
                    action,
                ),
            };
        case differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT:
            return {
                ...state,
                [differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT]:
                    lagrangeReducer(
                        state[
                            differentiationMethods
                                .LAGRANGE_POLYNOMIAL_THREE_POINT
                        ],
                        action,
                    ),
            };
        case integrationMethods.MIDPOINT_RULE:
            return {
                ...state,
                [integrationMethods.MIDPOINT_RULE]: midPointReducer(
                    state[integrationMethods.MIDPOINT_RULE],
                    action,
                ),
            };
        case integrationMethods.SIMPSON_RULE:
            return {
                ...state,
                [integrationMethods.SIMPSON_RULE]: simpsonReducer(
                    state[integrationMethods.SIMPSON_RULE],
                    action,
                ),
            };
        case integrationMethods.TRAPEZOIDAL_RULE:
            return {
                ...state,
                [integrationMethods.TRAPEZOIDAL_RULE]: trapezoidalReducer(
                    state[integrationMethods.TRAPEZOIDAL_RULE],
                    action,
                ),
            };

        default:
            throw new Error(`Unhandled method type: ${state.method}`);
    }
}

export default rootReducer;
