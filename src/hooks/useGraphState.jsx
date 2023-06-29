import { useContext } from 'react';
import { GraphStateContext } from '../context/graphContext';

export default function useGraphState() {
    return useContext(GraphStateContext);
}
