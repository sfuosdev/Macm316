import middlePointReducer, {
    initialMiddlePointState,
} from '../../context/MiddlePointReducer';
import { graphDispatchActions } from '../../context/constants';

describe('MiddlePointReducer', () => {
    it('should handle UPDATE_FN', () => {
        const newFn = 'x^2';
        const action = {
            type: graphDispatchActions.UPDATE_FN,
            payload: newFn,
        };
        const updatedState = middlePointReducer(
            initialMiddlePointState,
            action,
        );
        expect(updatedState.fn).toBe(newFn);
    });

    it('should handle UPDATE_LOWER_LIMIT', () => {
        const newValue = 0;
        const action = {
            type: graphDispatchActions.UPDATE_LOWER_LIMIT,
            payload: newValue,
        };
        const updatedState = middlePointReducer(
            initialMiddlePointState,
            action,
        );
        expect(updatedState.lowerLimit).toBe(newValue);
    });

    it('should handle UPDATE_INTERVAL', () => {
        const newValue = 3;
        const action = {
            type: graphDispatchActions.UPDATE_INTERVAL,
            payload: newValue,
        };
        const updatedState = middlePointReducer(
            initialMiddlePointState,
            action,
        );
        expect(updatedState.interval).toBe(newValue);
    });
});
