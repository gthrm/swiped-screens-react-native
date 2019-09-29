
import * as React from 'react';
import {
    LayoutAnimation
} from 'react-native';
import styled from 'styled-components';


const RecyclingContainer = styled.View`
    right: 0px;
    left: 0px;
    bottom: 0px;
    height: ${p => p.statusBarHeight ? p.statusBarHeight + 40 : 40};
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: #99b1c6;
    padding-bottom: ${p => p.statusBarHeight ? p.statusBarHeight : 40};
    z-index: -1;
`

const TextRecyclingPanel = styled.Text`
    font-size: 22px;
    line-height: 26px;
    color: #ededed;
`
LayoutAnimation.configureNext({ duration: 300, create: { type: 'easeInEaseOut', property: 'opacity' }, update: { type: 'easeInEaseOut', property: 'opacity' }, delete: { type: 'easeInEaseOut', property: 'opacity' } });

const RecyclingPanel = ({ statusBarHeight }) => {

    return (
        <RecyclingContainer
            statusBarHeight={statusBarHeight}
        >
            <TextRecyclingPanel>RecyclingPanel</TextRecyclingPanel>
        </RecyclingContainer>
    )
}

export default RecyclingPanel;