import Joi from 'joi';
import { ValidationError } from '../errors';
import { graphDispatchActions } from './constants';

export const initialLagrangeState = {
    fn: '',
    lowerLimit: 0,
    upperLimit: 10,
    // 폼 내용에 따라 하기 point 파트들은 자유롭게 변환.
    // interval: 0,
    point1: 1,
    point2: 5,
    point3: 9,
};

const lagrangeStateSchema = Joi.object({
    lowerLimit: Joi.number().required(),
    upperLimit: Joi.number().required(),
    fn: Joi.string().allow('').required(),
    // interval: Joi.number().positive().required()
    point1: Joi.number().required(),
    point2: Joi.number().required(),
    point3: Joi.number().required(),
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
        case graphDispatchActions.UPDATE_UPPER_LIMIT:
            newState = { ...state, upperLimit: action.value };
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
