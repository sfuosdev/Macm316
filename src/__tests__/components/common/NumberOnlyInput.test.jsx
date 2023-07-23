import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberOnlyInput from '../../../components/common/input/NumberOnlyInput';

describe('NumberOnlyInput', () => {
    it('should show error message "Number Input Expected" if wrong input given', () => {
        const onChangeMock = jest.fn();
        render(
            <NumberOnlyInput fieldName="Test Field" onChange={onChangeMock} />,
        );

        const input = screen.getByLabelText('Test Field');
        fireEvent.keyDown(input, { key: 'a', code: 'KeyA' });
        const errorMessage = screen.getByText('Number Input Expected');
        expect(errorMessage).toBeInTheDocument();
    });

    it('calls onChange on every key press and shows the text in the input', () => {
        const onChangeMock = jest.fn();
        render(
            <NumberOnlyInput fieldName="Test Field" onChange={onChangeMock} />,
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

        fireEvent.change(input, { target: { value: '12.3' } });
        expect(onChangeMock).toHaveBeenCalledTimes(3);
        expect(onChangeMock).toHaveBeenCalledWith('12', '12.3');
        expect(input.value).toBe('12.3');
    });

    it('displays the fieldName prop on the screen', () => {
        const fieldName = 'Test Field Name';
        const onChangeMock = jest.fn();
        render(
            <NumberOnlyInput fieldName={fieldName} onChange={onChangeMock} />,
        );

        const label = screen.getByText(fieldName);
        expect(label).toBeInTheDocument();
    });
});
