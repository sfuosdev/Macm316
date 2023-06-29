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
            value: newValue,
        };
        const updatedState = lagrangeReducer(initialLagrangeState, action);
        expect(updatedState.lowerLimit).toBe(newValue);
    });

    it('should handle UPDATE_UPPER_LIMIT', () => {
        const newValue = 10;
        const action = {
            type: graphDispatchActions.UPDATE_UPPER_LIMIT,
            value: newValue,
        };
        const updatedState = lagrangeReducer(initialLagrangeState, action);
        expect(updatedState.upperLimit).toBe(newValue);
    });

    it('should handle UPDATE_POINT1', () => {
        const newValue = 1;
        const action = {
            type: graphDispatchActions.UPDATE_POINT1,
            value: newValue,
        };
        const updatedState = lagrangeReducer(initialLagrangeState, action);
        expect(updatedState.point1).toBe(newValue);
    });

    it('should handle UPDATE_POINT2', () => {
        const newValue = 5;
        const action = {
            type: graphDispatchActions.UPDATE_POINT2,
            value: newValue,
        };
        const updatedState = lagrangeReducer(initialLagrangeState, action);
        expect(updatedState.point2).toBe(newValue);
    });

    it('should handle UPDATE_POINT3', () => {
        const newValue = 9;
        const action = {
            type: graphDispatchActions.UPDATE_POINT3,
            value: newValue,
        };
        const updatedState = lagrangeReducer(initialLagrangeState, action);
        expect(updatedState.point3).toBe(newValue);
    });
});
