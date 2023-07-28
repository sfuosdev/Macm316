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

    const newState = { ...state };
    let method;

    if (action.type.startsWith(differentiationMethods.MIDDLE_POINT)) {
        method = differentiationMethods.MIDDLE_POINT;
        newState[method] = middlePointReducer(newState[method], action);
    } else if (
        action.type.startsWith(
            differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT,
        )
    ) {
        method = differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT;
        newState[method] = lagrangeReducer(newState[method], action);
    } else if (action.type.startsWith(integrationMethods.MIDPOINT_RULE)) {
        method = integrationMethods.MIDPOINT_RULE;
        newState[method] = midPointReducer(newState[method], action);
    } else if (action.type.startsWith(integrationMethods.SIMPSON_RULE)) {
        method = integrationMethods.SIMPSON_RULE;
        newState[method] = simpsonReducer(newState[method], action);
    } else if (action.type.startsWith(integrationMethods.TRAPEZOIDAL_RULE)) {
        method = integrationMethods.TRAPEZOIDAL_RULE;
        newState[method] = trapezoidalReducer(newState[method], action);
    } else {
        throw new Error(`Unhandled action type: ${action.type}`);
    }

    return newState;
}
export default rootReducer;
