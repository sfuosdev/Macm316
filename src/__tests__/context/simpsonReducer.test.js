import SimpsonReducer, {
    initialSimpsonState,
} from '../../context/SimpsonReducer';
import { graphDispatchActions } from '../../context/constants';

describe('SimpsonReducer', () => {
    it('should handle UPDATE_FN', () => {
        const action = {
            type: graphDispatchActions.UPDATE_FN,
            payload: 'x^2',
        };
        const updatedState = SimpsonReducer(initialSimpsonState, action);
        expect(updatedState.fn).toBe('x^2');
    });

    it('should handle UPDATE_LOWER_LIMIT', () => {
        const action = {
            type: graphDispatchActions.UPDATE_LOWER_LIMIT,
            value: 1,
        };
        const updatedState = SimpsonReducer(initialSimpsonState, action);
        expect(updatedState.lowerLimit).toBe(1);
    });

    it('should handle UPDATE_UPPER_LIMIT', () => {
        const action = {
            type: graphDispatchActions.UPDATE_UPPER_LIMIT,
            value: 5,
        };
        const updatedState = SimpsonReducer(initialSimpsonState, action);
        expect(updatedState.upperLimit).toBe(5);
    });

    it('should handle UPDATE_NUMBER_OF_INTERVAL', () => {
        const action = {
            type: graphDispatchActions.UPDATE_NUMBER_OF_INTERVAL,
            value: 10,
        };
        const updatedState = SimpsonReducer(initialSimpsonState, action);
        expect(updatedState.interval).toBe(10);
    });

    it('should throw an error on invalid action', () => {
        const action = {
            type: 'INVALID_ACTION',
            value: 10,
        };
        expect(() => SimpsonReducer(initialSimpsonState, action)).toThrowError(
            /Unhandled action type/,
        );
    });
});
