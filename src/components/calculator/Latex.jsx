import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function LaTex({ tex }) {
    const mathRef = useRef();

    useEffect(() => {
        if (window.MathJax) {
            window.MathJax.typesetPromise([mathRef.current]);
        }
    }, [tex]);

    return <div ref={mathRef}>{`\\(${tex}\\)`}</div>;
}

LaTex.propTypes = {
    tex: PropTypes.string.isRequired,
};

export default LaTex;
