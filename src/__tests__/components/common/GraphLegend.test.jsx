import React from 'react';
import { render, screen } from '@testing-library/react';
import GraphLegend from '../../../components/common/GraphLegend';

describe('GraphLegend', () => {
    it('renders the correct number of color and title pairs', () => {
        const legendData = [
            { color: 'red', title: 'Red' },
            { color: 'green', title: 'Green' },
            { color: 'blue', title: 'Blue' },
        ];

        render(<GraphLegend data={legendData} />);

        const legendItems = screen.getAllByTestId('legend-item');
        expect(legendItems.length).toBe(legendData.length);
    });
});
