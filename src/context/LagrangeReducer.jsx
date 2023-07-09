import Joi from 'joi';
import { ValidationError } from '../errors';
import { graphDispatchActions } from './constants';

export const initialLagrangeState = {
    fn: '',
    lowerLimit: 0,
    interval: 1,
};

const lagrangeStateSchema = Joi.object({
    fn: Joi.string().allow('').required(),
    lowerLimit: Joi.number().required(),
    interval: Joi.number().required(),
});

/* eslint-disable default-param-last */
function lagrangeReducer(state = initialLagrangeState, action) {
    /* eslint-enable default-param-last */
    let newState;

    switch (action.type) {
        case graphDispatchActions.UPDATE_FN:
            newState = { ...state, fn: action.payload };
            break;
        case graphDispatchActions.UPDATE_LOWER_LIMIT:
            newState = { ...state, lowerLimit: action.value };
            break;
        case graphDispatchActions.UPDATE_INTERVAL:
            newState = { ...state, interval: action.value };
            break;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }

    const { error } = lagrangeStateSchema.validate(newState);
    if (error) {
        throw new ValidationError(`Invalid state update: ${error}`);
    }

    return newState;
}

export default lagrangeReducer;
