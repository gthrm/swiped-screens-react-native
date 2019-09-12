import React from 'react';
import styled from 'styled-components';

import { width } from '../constatnts/Layout';
import DrggableList from '../components/DrggableList';

const Container = styled.View`
    background-color: ${p => p.color ? p.color : 'green'};
    width: ${width * 0.8};
    justify-content: center;
    align-items: center;
`

const ScreenText = styled.Text`
    font-size: 22px;
    line-height: 26px;
`

const Screen = ({ title = 'First Screen', style, color, data: Data }) => {
    return (
        <Container
            color={color}
            style={style}
        >
            {/* <DrggableList/> */}
            {Data ? <Data /> : <ScreenText>{title}</ScreenText>}

        </Container>
    )
}

export default Screen;