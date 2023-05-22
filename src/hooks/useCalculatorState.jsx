import { useContext } from 'react';
import { CalculatorStateContext } from '../context/calculatorContext';

export default function useCalculatorState() {
    return useContext(CalculatorStateContext);
}
