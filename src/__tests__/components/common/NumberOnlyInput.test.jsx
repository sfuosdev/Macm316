import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PropTypes from 'prop-types';
import NumberOnlyInput from '../../../components/common/input/NumberOnlyInput';

// Error boundary component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch() {}

    render() {
        const { hasError } = this.state; // use destructuring here
        const { children } = this.props; // use destructuring here

        if (hasError) {
            return <div>Error occurred.</div>;
        }

        return children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
};

ErrorBoundary.defaultProps = {
    children: null,
};

describe('NumberOnlyInput', () => {
    it('should show error message "Number Input Expected" if non-numeric input is given', () => {
        render(
            <ErrorBoundary>
                <NumberOnlyInput fieldName="Test Field" onChange={() => {}} />
            </ErrorBoundary>,
        );
        const input = screen.getByLabelText('Test Field');
        fireEvent.change(input, { target: { value: 'abc' } });
        const errorMessage = screen.getByText('Number Input Expected');
        expect(errorMessage).toBeInTheDocument();
    });

    it('calls onChange with old and new values when a number is entered', () => {
        const onChangeMock = jest.fn();
        render(
            <ErrorBoundary>
                <NumberOnlyInput
                    fieldName="Test Field"
                    onChange={onChangeMock}
                />
            </ErrorBoundary>,
        );
        const input = screen.getByLabelText('Test Field');

        fireEvent.change(input, { target: { value: '1' } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith('', '1');
        expect(input.value).toBe('1');

        fireEvent.change(input, { target: { value: '12' } });
        expect(onChangeMock).toHaveBeenCalledTimes(2);
        expect(onChangeMock).toHaveBeenCalledWith('1', '12');
        expect(input.value).toBe('12');

        fireEvent.change(input, { target: { value: '123' } });
        expect(onChangeMock).toHaveBeenCalledTimes(3);
        expect(onChangeMock).toHaveBeenCalledWith('12', '123');
        expect(input.value).toBe('123');
    });

    it('displays the fieldName prop on the screen', () => {
        const fieldName = 'Test Field Name';
        render(
            <ErrorBoundary>
                <NumberOnlyInput fieldName={fieldName} onChange={() => {}} />
            </ErrorBoundary>,
        );
        const label = screen.getByText(fieldName);
        expect(label).toBeInTheDocument();
    });

    it('should not show error message when a numerical character is entered', () => {
        const onChangeMock = jest.fn();
        render(
            <ErrorBoundary>
                <NumberOnlyInput
                    fieldName="Test Field"
                    onChange={onChangeMock}
                />
            </ErrorBoundary>,
        );
        const input = screen.getByLabelText('Test Field');
        fireEvent.change(input, { target: { value: '1' } });
        const errorMessage = screen.queryByText('Number Input Expected');
        expect(errorMessage).not.toBeInTheDocument();
    });
});
