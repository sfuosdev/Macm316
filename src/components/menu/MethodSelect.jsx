import React from 'react';
import SingleSelect from '../common/SingleSelect';

function MethodSelect() {
    return (
        <SingleSelect>
            <option value={1}>opt 1</option>
            <option value={2}>opt 2</option>
            <option value={3}>opt 3</option>
            <option value={4}>opt 4</option>
        </SingleSelect>
    );
}

export default MethodSelect;
