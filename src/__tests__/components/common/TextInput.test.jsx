import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from '../../../components/common/input/TextInput';

describe('TextInputField', () => {
    it('should show error message "Text Input Expected" if wrong input given', () => {
        render(<TextInput fieldName="Test Field" alphabetOnly />);

        const input = screen.getByLabelText('Test Field');
        fireEvent.keyDown(input, { key: '1', code: 'KeyA' });
        const errorMessage = screen.getByText('Text Input Expected');
        expect(errorMessage).toBeInTheDocument();
    });
});

describe('TextInputField', () => {
    it('calls onChange on every key press and shows the text in the input', () => {
        const onChangeMock = jest.fn();
        render(<TextInput onChange={onChangeMock} fieldName="Test Field" />);

        const input = screen.getByLabelText('Test Field');
        fireEvent.change(input, { target: { value: 'S' } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith('', 'S');
        expect(input.value).toBe('S');

        fireEvent.change(input, { target: { value: 'Sf' } });
        expect(onChangeMock).toHaveBeenCalledTimes(2);
        expect(onChangeMock).toHaveBeenCalledWith('S', 'Sf');
        expect(input.value).toBe('Sf');

        fireEvent.change(input, { target: { value: 'Sfu' } });
        expect(onChangeMock).toHaveBeenCalledTimes(3);
        expect(onChangeMock).toHaveBeenCalledWith('Sf', 'Sfu');
        expect(input.value).toBe('Sfu');
    });
});

describe('TextInputField', () => {
    it('displays the fieldName prop on the screen', () => {
        const fieldName = 'Test Field Name';
        render(<TextInput onChange={() => {}} fieldName={fieldName} />);

        const label = screen.getByText(fieldName);
        expect(label).toBeInTheDocument();
    });
});

describe('TextInputField', () => {
    it('test if alphabetOnly boolean prop when alphabetOnly is false (false by default)', () => {
        const onChangeMock = jest.fn();
        render(<TextInput onChange={onChangeMock} fieldName="Test Field" />);
        const input = screen.getByLabelText('Test Field');

        fireEvent.change(input, { target: { value: '1' } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith('', '1');
        expect(input.value).toBe('1');

        fireEvent.keyDown(input, { key: '1', code: 'KeyA' });
        const errorMessage = screen.queryByText('Text Input Expected');
        expect(errorMessage).not.toBeInTheDocument();
    });
});

describe('TextInputField', () => {
    it('test if alphabetOnly boolean prop when alphabetOnly is true', () => {
        render(<TextInput fieldName="Test Field" alphabetOnly />);

        const input = screen.getByLabelText('Test Field');

        fireEvent.keyDown(input, { key: '1', code: 'KeyA' });
        const errorMessage = screen.getByText('Text Input Expected');
        expect(errorMessage).toBeInTheDocument();
        expect(input.value).toBe('');
    });
});
