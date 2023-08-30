import React from 'react';
import PropTypes from 'prop-types';

function GraphLegend({ data }) {
    return (
        <div
            style={{
                position: 'absolute',
                border: '2px solid black',
                padding: '10px',
                display: 'inline-block',
                marginLeft: '10px',
                marginTop: '15px',
                borderRadius: '5px',
                zIndex: 1,
                backgroundColor: 'white',
            }}
        >
            {data.map((item) => (
                <div
                    key={item.title}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '5px',
                    }}
                    data-testid="legend-item"
                >
                    <div
                        style={{
                            width: '50px',
                            borderWidth: '3px',
                            borderStyle: item.style ?? 'solid',
                            borderColor: item.color,
                            marginRight: '5px',
                        }}
                    />
                    <span style={{ fontSize: '150%' }}>{item.title}</span>
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
            style: PropTypes.string,
        }),
    ).isRequired,
};

export default GraphLegend;
