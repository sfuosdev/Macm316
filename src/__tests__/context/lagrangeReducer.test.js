import graphRootReducer, {
    initialRootGraphState,
} from '../../context/graphRootReducer';
import {
    graphDispatchActions,
    differentiationMethods,
} from '../../context/constants';

describe('LagrangeReducer', () => {
    it('should handle UPDATE_FN', () => {
        const newFn = 'sin(x)';
        const action = {
            type: `${differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT}_${graphDispatchActions.UPDATE_FN}`,
            payload: newFn,
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(
            updatedState[differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT]
                .fn,
        ).toBe(newFn);
    });

    it('should handle UPDATE_LOWER_LIMIT', () => {
        const newValue = 0;
        const action = {
            type: `${differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`,
            payload: newValue,
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(
            updatedState[differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT]
                .lowerLimit,
        ).toBe(newValue);
    });

    it('should handle UPDATE_INTERVVAL', () => {
        const newValue = 0.1;
        const action = {
            type: `${differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT}_${graphDispatchActions.UPDATE_INTERVAL}`,
            payload: newValue,
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(
            updatedState[differentiationMethods.LAGRANGE_POLYNOMIAL_THREE_POINT]
                .interval,
        ).toBe(newValue);
    });
});
