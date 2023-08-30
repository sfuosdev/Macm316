import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MenuBody from './MenuBody';
import NumericalMethodSelect from './NumericalMethodSelect';
import ModeSelect from './ModeSelect';
import useCalculatorState from '../../hooks/useCalculatorState';
import { calculatorDispatchActions } from '../../context/constants';

const MenuWrapper = styled.div`
    display: flex;
    min-width: 450px;
    max-width: 800px;
    overflow: hidden;
    flex-direction: column;
    flex-wrap: wrap;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;

const MenuHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid black;
`;

const Resizer = styled.div`
    display: flex;
    background-color: orange;
    width: 6px;
    cursor: w-resize;
    justify-content: center;
    aligin-items: center;
    &:hover {
        box-shadow: 0px 0px 10px orange;
    }
`;

function WidthResizer({ mouseDownEvent }) {
    return (
        <Resizer onMouseDown={mouseDownEvent} />
    );
}

WidthResizer.propTypes = {
    mouseDownEvent: PropTypes.func.isRequired,
};

function Menu() {
    const [state, dispatch] = useCalculatorState();
    const [width, setWidth] = useState(state.menuWidth);

    const onMouseDown = (mouseDownEvent) => {
        const startWidth = width;
        const startPositionX = mouseDownEvent.pageX;

        function onMouseMove(mouseMoveEvent) {
            setWidth(startWidth - startPositionX + mouseMoveEvent.pageX);
        }
        function onMouseUp() {
            document.body.removeEventListener('mousemove', onMouseMove);
            dispatch({
                action: calculatorDispatchActions.UPDATE_MENU_WIDTH,
                value: width,
            });
        }

        document.body.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseup', onMouseUp, { once: true });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <MenuWrapper style={{ width }}>
                <MenuHeaderWrapper>
                    <ModeSelect />
                    <NumericalMethodSelect />
                </MenuHeaderWrapper>
                <MenuBody />
            </MenuWrapper>
            <WidthResizer mouseDownEvent={onMouseDown} />
        </div>
    );
}

export default Menu;
