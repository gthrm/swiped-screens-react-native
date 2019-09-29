import React from 'react';
import {
    Animated,
    Text,
    TouchableOpacity,
    View,
    Easing
} from 'react-native';

import Colors from '../constants/Colors';
import TabBarIcon from './TabBarIcon';

class ScreenTitle extends React.Component {

    render() {
        const {
            rightButton,
            title = "Заголовок",
            icon = false,
            onIconPress = () => console.log('onIconPress'),
            focused = false,
            type,
            onRightButtonPress = () => console.log('onRightButtonPress'),
            style,
            rightButtonIcon='plus-circle'
        } = this.props
        return (
            <TouchableOpacity
                style={[{ ...style }, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}
                activeOpacity={0.8}
                onPress={onIconPress}
            >
                <View style={{ flex: 1, paddingLeft: type === 2 ? 0 : 25, paddingTop: type === 2 ? 0 : 22, flexDirection: 'row', alignItems: 'center' }}>

                    <Text style={{
                        fontSize: type === 2 ? 18 : 25,
                        fontFamily: "sf-ui-display-semibold"
                    }}>{title}</Text>

                    {icon ? <RenderIcon onIconPress={onIconPress} focused={focused} styleContainer={{ flex: 0 }} /> : null}
                    
                </View>
                <View style={{ flex: 0.2, paddingLeft: type === 2 ? 0 : 25, paddingTop: type === 2 ? 0 : 22, flexDirection: 'row', alignItems: 'center' }}>
                    {rightButton ? <RenderIcon onIconPress={onRightButtonPress} nameIcon={rightButtonIcon} focused={focused} /> : null}
                </View>
            </TouchableOpacity>
        )
    }

}

class RenderIcon extends React.Component {
    constructor(props) {
        super(props);
        this.position = new Animated.Value(0);
        this.rotate = this.position.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg'],
            extrapolate: "clamp"
        });
        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate
            }]
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.focused !== this.props.focused) {
            Animated.timing(
                this.position,
                {
                    toValue: this.props.focused ? 1 : 0,
                    duration: 100,
                    easing: Easing.linear
                }
            ).start()
        }
    }
    render() {
        const {
            onIconPress = () => console.log('onIconPress'),
            nameIcon = 'chevron-right',
            style,
            styleContainer
        } = this.props
        return (
            <Animated.View style={[this.rotateAndTranslate, { ...styleContainer }]}>
                <TouchableOpacity
                    style={[{ ...style }, { paddingHorizontal: 10, alignItems: 'flex-end', justifyContent: 'flex-end' }]}
                    onPress={onIconPress}
                >
                    <TabBarIcon
                        tintColor={Colors.textColor}
                        size={20}
                        focused={true}
                        name={nameIcon}
                    />
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

export default ScreenTitle