import graphRootReducer, {
    initialRootGraphState,
} from '../../context/graphRootReducer';
import {
    graphDispatchActions,
    integrationMethods,
} from '../../context/constants';

describe('SimpsonReducer', () => {
    it('should handle UPDATE_FN', () => {
        const action = {
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_FN}`,
            payload: 'x^2',
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(updatedState[integrationMethods.SIMPSON_RULE].fn).toBe('x^2');
    });

    it('should handle UPDATE_LOWER_LIMIT', () => {
        const action = {
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_LOWER_LIMIT}`,
            payload: 1,
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(updatedState[integrationMethods.SIMPSON_RULE].lowerLimit).toBe(
            1,
        );
    });

    it('should handle UPDATE_UPPER_LIMIT', () => {
        const action = {
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_UPPER_LIMIT}`,
            payload: 5,
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(updatedState[integrationMethods.SIMPSON_RULE].upperLimit).toBe(
            5,
        );
    });

    it('should handle UPDATE_NUMBER_OF_INTERVAL', () => {
        const action = {
            type: `${integrationMethods.SIMPSON_RULE}_${graphDispatchActions.UPDATE_INTERVAL}`,
            payload: 10,
        };
        const updatedState = graphRootReducer(initialRootGraphState, action);
        expect(updatedState[integrationMethods.SIMPSON_RULE].interval).toBe(10);
    });

    it('should throw an error on invalid action', () => {
        const action = {
            type: 'INVALID_ACTION',
            payload: 10,
        };
        expect(() =>
            graphRootReducer(initialRootGraphState, action),
        ).toThrowError(/Unhandled action type/);
    });
});
