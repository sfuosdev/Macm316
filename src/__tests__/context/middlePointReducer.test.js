import graphRootReducer, {
    initialRootGraphState,
} from '../../context/graphRootReducer';
import {
    graphDispatchActions,
    differentiationMethods,
} from '../../context/constants';

describe('MiddlePointReducer', () => {
    it('should handle UPDATE_FN', () => {
        const newFn = 'x^2';
        const action = {
            type: `${differentiationMethods.MIDDLE_POINT}_${graphDispatchActions.UPDATE_FN}`,
            payload: newFn,
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(updatedState[differentiationMethods.MIDDLE_POINT].fn).toBe(
            newFn,
        );
    });

    it('should handle UPDATE_LOWER_LIMIT', () => {
        const newValue = 0;
        const action = {
            type: `${differentiationMethods.MIDDLE_POINT}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`,
            payload: newValue,
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(
            updatedState[differentiationMethods.MIDDLE_POINT].lowerLimit,
        ).toBe(newValue);
    });

    it('should handle UPDATE_INTERVAL', () => {
        const newValue = 3;
        const action = {
            type: `${differentiationMethods.MIDDLE_POINT}_${graphDispatchActions.UPDATE_INTERVAL}`,
            payload: newValue,
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(updatedState[differentiationMethods.MIDDLE_POINT].interval).toBe(
            newValue,
        );
    });
});
