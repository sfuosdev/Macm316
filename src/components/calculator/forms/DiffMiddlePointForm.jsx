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

function DiffMiddlePointForm() {
    const [, dispatch] = React.useContext(GraphStateContext);

    const handleFnChange = (oldValue, newValue) => {
        console.log(oldValue, newValue);
        dispatch({
            type: graphDispatchActions.UPDATE_FN,
            payload: newValue,
        });
    };

    const handleLowerLimitChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);

        dispatch({
            type: graphDispatchActions.UPDATE_LOWER_LIMIT,
            payload: Number(newValue), // <- parse as number
        });
    };

    const handleIntervalChange = (oldValue, newValue) => {
        /* eslint-disable no-console */
        console.log(oldValue, newValue);

        dispatch({
            type: graphDispatchActions.UPDATE_INTERVAL,
            payload: Number(newValue), // <- parse as number
        });
    };

    return (
        <FormWrapper>
            <div>Middle Point Differentiation</div>
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

export default DiffMiddlePointForm;
