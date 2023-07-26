import graphRootReducer, {
    initialRootGraphState,
} from '../../context/graphRootReducer';
import {
    graphDispatchActions,
    integrationMethods,
} from '../../context/constants';

describe('TrapezoidalReducer', () => {
    it('should handle UPDATE_FN', () => {
        const newFn = '1/x';
        const action = {
            type: `${integrationMethods.TRAPEZOIDAL_RULE}_${graphDispatchActions.UPDATE_FN}`,
            payload: newFn,
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(updatedState[integrationMethods.TRAPEZOIDAL_RULE].fn).toBe(
            newFn,
        );
    });

    it('should handle UPDATE_LOWER_LIMIT', () => {
        const newValue = 0;
        const action = {
            type: `${integrationMethods.TRAPEZOIDAL_RULE}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`,
            payload: newValue,
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(
            updatedState[integrationMethods.TRAPEZOIDAL_RULE].lowerLimit,
        ).toBe(newValue);
    });

    it('should handle UPDATE_UPPER_LIMIT', () => {
        const newValue = 2;
        const action = {
            type: `${integrationMethods.TRAPEZOIDAL_RULE}_${graphDispatchActions.UPDATE_UPPER_LIMIT}`,
            payload: newValue,
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(
            updatedState[integrationMethods.TRAPEZOIDAL_RULE].upperLimit,
        ).toBe(newValue);
    });

    it('should handle UPDATE_NUMBER_OF_INTERVAL', () => {
        const newValue = 4;
        const action = {
            type: `${integrationMethods.TRAPEZOIDAL_RULE}_${graphDispatchActions.UPDATE_INTERVAL}`,
            payload: newValue,
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(updatedState[integrationMethods.TRAPEZOIDAL_RULE].interval).toBe(
            newValue,
        );
    });
});
