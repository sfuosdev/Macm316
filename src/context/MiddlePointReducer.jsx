import Joi from 'joi';
import { ValidationError } from '../errors';
import { graphDispatchActions } from './constants';

export const initialMiddlePointState = {
    fn: '',
    lowerLimit: 0,
    interval: 100,
};

const middlePointStateSchema = Joi.object({
    lowerLimit: Joi.number().required(),
    interval: Joi.number().integer().positive().required(),
    fn: Joi.string().allow('').required(),
});

/* eslint-disable default-param-last */
function middlePointReducer(state = initialMiddlePointState, action) {
    /* eslint-enable default-param-last */
    let newState;

    switch (action.type) {
        case graphDispatchActions.UPDATE_FN:
            newState = { ...state, fn: action.payload };
            break;
        case graphDispatchActions.UPDATE_LOWER_LIMIT:
            newState = { ...state, lowerLimit: action.payload };
            break;
        case graphDispatchActions.UPDATE_INTERVAL:
            newState = { ...state, interval: action.payload };
            break;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }

    const { error } = middlePointStateSchema.validate(newState);
    if (error) {
        throw new ValidationError(`Invalid state update: ${error}`);
    }

    return newState;
}

export default middlePointReducer;
