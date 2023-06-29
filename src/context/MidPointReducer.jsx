import Joi from 'joi';
import { ValidationError } from '../errors';
import { graphDispatchActions } from './constants';

export const initialMidPointState = {
    fn: '',
    lowerLimit: 0,
    upperLimit: 1,
    interval: 1,
};

const midPointStateSchema = Joi.object({
    lowerLimit: Joi.number().required(),
    upperLimit: Joi.number().required(),
    interval: Joi.number().integer().positive().required(),
    fn: Joi.string().allow('').required(),
});

/* eslint-disable default-param-last */
function midPointReducer(state = initialMidPointState, action) {
    /* eslint-enable default-param-last */
    let newState;

    switch (action.type) {
        case graphDispatchActions.UPDATE_FN:
            newState = { ...state, fn: action.payload };
            break;
        case graphDispatchActions.UPDATE_LOWER_LIMIT:
            newState = { ...state, lowerLimit: action.value };
            break;
        case graphDispatchActions.UPDATE_UPPER_LIMIT:
            newState = { ...state, upperLimit: action.value };
            break;
        case graphDispatchActions.UPDATE_NUMBER_OF_INTERVAL:
            newState = { ...state, interval: action.value };
            break;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }

    const { error } = midPointStateSchema.validate(newState);
    if (error) {
        throw new ValidationError(`Invalid state update: ${error}`);
    }

    return newState;
}

export default midPointReducer;
