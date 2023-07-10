import React from 'react';
import PropTypes from 'prop-types';

function GraphLegend({ data }) {
    return (
        <div
            style={{
                position: 'absolute',
                border: '1px solid #ccc',
                padding: '10px',
                display: 'inline-block',
            }}
        >
            {data.map((item) => (
                <div
                    key={item.title}
                    style={{ display: 'flex', alignItems: 'center' }}
                    data-testid="legend-item"
                >
                    <div
                        style={{
                            width: '50px',
                            height: '3px',
                            backgroundColor: item.color,
                            marginRight: '5px',
                        }}
                    />
                    <span>{item.title}</span>
                </div>
            ))}
        </div>
    );
}

GraphLegend.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default GraphLegend;
