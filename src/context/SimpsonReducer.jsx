import Joi from 'joi';
import { ValidationError } from '../errors';
import { graphDispatchActions } from './constants';

export const initialSimpsonState = {
    start: 0,
    end: 10,
    numberOfSteps: 100,
};

const simpsonStateSchema = Joi.object({
    start: Joi.number().required(),
    end: Joi.number().required(),
    numberOfSteps: Joi.number().integer().positive().required(),
});
/* eslint-disable default-param-last */
function simpsonReducer(state = initialSimpsonState, action) {
    /* eslint-enable default-param-last */
    let newState;

    switch (action.type) {
        case graphDispatchActions.UPDATE_START:
            newState = { ...state, start: action.value };
            break;
        case graphDispatchActions.UPDATE_END:
            newState = { ...state, end: action.value };
            break;
        case graphDispatchActions.UPDATE_STEPS:
            newState = { ...state, numberOfSteps: action.value };
            break;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }

    const { error } = simpsonStateSchema.validate(newState);
    if (error) {
        throw new ValidationError(`Invalid state update: ${error}`);
    }

    return newState;
}

export default simpsonReducer;
