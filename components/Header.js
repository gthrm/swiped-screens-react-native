import React from 'react';
import Constants from 'expo-constants';
import styled from 'styled-components';

import ComponentLib from '../ComponentsLib'
import { width, height } from '../constatnts/Layout';

const Container = styled.View`
    padding-top: ${Constants.statusBarHeight};
    width: ${width};
    height: ${height * 0.2};
    justify-content: center;
    align-items: flex-start;
`

const HeaderText = styled.Text`
    font-size: 22px;
    line-height: 26px;
`

const Header = ({ title = 'Header' }) => {
    return (
        <Container>
            <ComponentLib.ScreenTitle title={title} icon/>
        </Container>
    )
}

export default Header;