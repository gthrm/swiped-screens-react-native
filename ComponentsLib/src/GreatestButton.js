import React from 'react';
import {
    View

} from 'react-native';
import styled, { css } from 'styled-components/native';
import Colors from '../constants/Colors';


const TabButton = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 8;
    background: ${p => p.color ? p.color : p.isPressed ? Colors.isSubscribe : Colors.unSubscribe};
    max-width: ${p => p.sizeType === 2 ? '129px' : '104px'};
    height: ${p => p.sizeType === 2 ? '36px' : '28px'};
`

const TextButton = styled.Text`
    font-family: sf-ui-display-bold;
    font-size: ${p => p.sizeType === 2 ? '12px' : '12px'};
    color: ${ p => p.textColor ? p.textColor : p.isPressed ? Colors.isSubscribeText : Colors.unSubscribeText};
`


export default class GreatestButton extends React.Component {

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render() {
        const {
            text = "Test",
            onPress = () => console.log("Connect onPress prop to GreatestButton component"),
            isPressed = false,
            eventId,
            color,
            textColor,
            sizeType
        } = this.props;
        return (
            <TabButton
                sizeType={sizeType}
                color={color}
                isPressed={isPressed}
                onPress={() => onPress(eventId)}
            >
                <TextButton
                    sizeType={sizeType}
                    textColor={textColor}
                    isPressed={isPressed}
                >{text}</TextButton>
            </TabButton>
        );
    }
}