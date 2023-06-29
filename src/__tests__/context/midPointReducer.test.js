import midPointReducer, {
    initialMidPointState,
} from '../../context/MidPointReducer';
import { graphDispatchActions } from '../../context/constants';

describe('MidPointReducer', () => {
    it('should handle UPDATE_FN', () => {
        const newFn = '2*x';
        const action = { type: graphDispatchActions.UPDATE_FN, payload: newFn };
        const updatedState = midPointReducer(initialMidPointState, action);
        expect(updatedState.fn).toBe(newFn);
    });

    it('should handle UPDATE_LOWER_LIMIT', () => {
        const newValue = 1;
        const action = {
            type: graphDispatchActions.UPDATE_LOWER_LIMIT,
            value: newValue,
        };
        const updatedState = midPointReducer(initialMidPointState, action);
        expect(updatedState.lowerLimit).toBe(newValue);
    });

    it('should handle UPDATE_UPPER_LIMIT', () => {
        const newValue = 10;
        const action = {
            type: graphDispatchActions.UPDATE_UPPER_LIMIT,
            value: newValue,
        };
        const updatedState = midPointReducer(initialMidPointState, action);
        expect(updatedState.upperLimit).toBe(newValue);
    });
});
