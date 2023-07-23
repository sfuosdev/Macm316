import React from 'react';
import styled from 'styled-components';
import TextInput from '../../common/TextInput';
import NumberOnlyInput from '../../common/input/NumberOnlyInput';
import LaTex from '../Latex';
import { GraphStateContext } from '../../../context/graphContext';
import { graphDispatchActions } from '../../../context/constants';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function LagrangeDiffForm() {
    // context validation
    const [state, dispatch] = React.useContext(GraphStateContext);

    if (!state || !dispatch) {
        throw new Error(
            'Form must be wrapped in a GraphContextProvider component',
        );
    }

    // handle the change of the input fields by passing to onChange
    const handleFnChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);
        state.method = 'lagrange polynomial three point rule';
        dispatch({
            type: graphDispatchActions.UPDATE_FN,
            payload: newValue,
        });
    };

    const handleLowerLimitChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);
        state.method = 'lagrange polynomial three point rule';
        dispatch({
            type: graphDispatchActions.UPDATE_LOWER_LIMIT,
            payload: newValue,
        });
    };

    const handleIntervalChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);
        state.method = 'lagrange polynomial three point rule';
        dispatch({
            type: graphDispatchActions.UPDATE_INTERVAL,
            payload: newValue,
        });
    };

    return (
        <FormWrapper>
            <div>Lagrange Polynomial Differentiation</div>
            <div>
                <LaTex tex="f(x)" />
                <TextInput fieldName="fn" onChange={handleFnChange} />
            </div>
            <div>
                <LaTex tex="\textup{value of }x_{0}" />
                <NumberOnlyInput
                    fieldName="lowerLimit"
                    onChange={handleLowerLimitChange}
                />
            </div>
            <div>
                <LaTex tex="\textup{interval }(h)" />
                <NumberOnlyInput
                    fieldName="interval"
                    onChange={handleIntervalChange}
                />
            </div>
        </FormWrapper>
    );
}

export default LagrangeDiffForm;
