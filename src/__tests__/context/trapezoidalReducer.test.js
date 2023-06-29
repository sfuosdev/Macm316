import trapezoidalReducer, {
    initialTrapezoidalState,
} from '../../context/TrapezoidalReducer';
import { graphDispatchActions } from '../../context/constants';

describe('TrapezoidalReducer', () => {
    it('should handle UPDATE_FN', () => {
        const newFn = '1/x';
        const action = {
            type: graphDispatchActions.UPDATE_FN,
            payload: newFn,
        };
        const updatedState = trapezoidalReducer(
            initialTrapezoidalState,
            action,
        );
        expect(updatedState.fn).toBe(newFn);
    });

    it('should handle UPDATE_LOWER_LIMIT', () => {
        const newValue = 0;
        const action = {
            type: graphDispatchActions.UPDATE_LOWER_LIMIT,
            value: newValue,
        };
        const updatedState = trapezoidalReducer(
            initialTrapezoidalState,
            action,
        );
        expect(updatedState.lowerLimit).toBe(newValue);
    });

    it('should handle UPDATE_UPPER_LIMIT', () => {
        const newValue = 2;
        const action = {
            type: graphDispatchActions.UPDATE_UPPER_LIMIT,
            value: newValue,
        };
        const updatedState = trapezoidalReducer(
            initialTrapezoidalState,
            action,
        );
        expect(updatedState.upperLimit).toBe(newValue);
    });

    it('should handle UPDATE_NUMBER_OF_INTERVAL', () => {
        const newValue = 4;
        const action = {
            type: graphDispatchActions.UPDATE_NUMBER_OF_INTERVAL,
            value: newValue,
        };
        const updatedState = trapezoidalReducer(
            initialTrapezoidalState,
            action,
        );
        expect(updatedState.interval).toBe(newValue);
    });
});
