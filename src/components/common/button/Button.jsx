import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    cursor: pointer;
    background: 'white';
    color: '#BF4F74';
    font-size: 1em;
    width: 100px;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
    &:hover {
        background-color: orange;
    }
`;

function Button({ title, onClick }) {
    return <StyledButton onClick={onClick}>{title}</StyledButton>;
}

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    title: '',
    onClick: () => null,
};

export default Button;
