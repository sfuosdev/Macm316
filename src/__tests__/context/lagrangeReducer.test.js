import lagrangeReducer, {
    initialLagrangeState,
} from '../../context/LagrangeReducer';
import { graphDispatchActions } from '../../context/constants';

describe('LagrangeReducer', () => {
    it('should handle UPDATE_FN', () => {
        const newFn = 'sin(x)';
        const action = {
            type: graphDispatchActions.UPDATE_FN,
            payload: newFn,
        };
        const updatedState = lagrangeReducer(initialLagrangeState, action);
        expect(updatedState.fn).toBe(newFn);
    });

    it('should handle UPDATE_LOWER_LIMIT', () => {
        const newValue = 0;
        const action = {
            type: graphDispatchActions.UPDATE_LOWER_LIMIT,
            payload: newValue,
        };
        const updatedState = lagrangeReducer(initialLagrangeState, action);
        expect(updatedState.lowerLimit).toBe(newValue);
    });

    it('should handle UPDATE_INTERVVAL', () => {
        const newValue = 0.1;
        const action = {
            type: graphDispatchActions.UPDATE_INTERVAL,
            payload: newValue,
        };
        const updatedState = lagrangeReducer(initialLagrangeState, action);
        expect(updatedState.interval).toBe(newValue);
    });
});
