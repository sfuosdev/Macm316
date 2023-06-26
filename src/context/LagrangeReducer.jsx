import Joi from 'joi';
import { ValidationError } from '../errors';
import { graphDispatchActions } from './constants';

export const initialLagrangeState = {
    start: 0,
    end: 10,
    point1: 1,
    point2: 5,
    point3: 9,
};

const lagrangeStateSchema = Joi.object({
    start: Joi.number().required(),
    end: Joi.number().required(),
    point1: Joi.number().required(),
    point2: Joi.number().required(),
    point3: Joi.number().required(),
});

/* eslint-disable default-param-last */
function lagrangeReducer(state = initialLagrangeState, action) {
    /* eslint-enable default-param-last */
    let newState;

    switch (action.type) {
        case graphDispatchActions.UPDATE_START:
            newState = { ...state, start: action.value };
            break;
        case graphDispatchActions.UPDATE_END:
            newState = { ...state, end: action.value };
            break;
        case graphDispatchActions.UPDATE_POINT1:
            newState = { ...state, point1: action.value };
            break;
        case graphDispatchActions.UPDATE_POINT2:
            newState = { ...state, point2: action.value };
            break;
        case graphDispatchActions.UPDATE_POINT3:
            newState = { ...state, point3: action.value };
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
