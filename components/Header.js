import React from 'react';
import Constants from 'expo-constants';
import styled from 'styled-components';

import { width, height } from '../constatnts/Layout';

const Container = styled.View`
    background-color: #006FBA;
    padding-top: ${Constants.statusBarHeight};
    width: ${width};
    height: ${height * 0.2};
    justify-content: center;
    align-items: center;
`

const HeaderText = styled.Text`
    font-size: 22px;
    line-height: 26px;
`

const Header = ({ title = 'Header' }) => {
    return (
        <Container>
            <HeaderText>{title}</HeaderText>
        </Container>
    )
}

export default Header;