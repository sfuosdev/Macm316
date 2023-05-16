import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectComponent = styled.select`
    margin: 10px;
`;

function SingleSelect({ children, onChange }) {
    return <SelectComponent onChange={onChange}>{children}</SelectComponent>;
}

SingleSelect.propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func,
};

SingleSelect.defaultProps = {
    children: null,
    onChange: () => null,
};

export default SingleSelect;
