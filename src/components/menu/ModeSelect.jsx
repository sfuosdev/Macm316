import React from 'react';
import SingleSelect from '../common/SingleSelect';

function ModeSelect() {
    return (
        <SingleSelect>
            <option value={1}>Numerical Differentiation</option>
            <option value={2}>Numerical Integration</option>
        </SingleSelect>
    );
}

export default ModeSelect;
