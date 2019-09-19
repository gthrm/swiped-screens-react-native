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
        const { title = "Заголовок", icon = false, onIconPress = () => console.log('onIconPress'), focused = false, type } = this.props
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onIconPress}
            >
                <View style={{ flex: 1, paddingLeft: type === 2 ? 0 : 25, paddingTop: type === 2 ? 0 : 22, flexDirection: 'row', alignItems: 'center' }}>

                    <Text style={{
                        fontSize: type === 2 ? 18 : 25,
                        fontFamily: "sf-ui-display-semibold"
                    }}>{title}</Text>

                    {icon ? <RenderIcon onIconPress={onIconPress} focused={focused} /> : null}
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
        const { onIconPress = () => console.log('onIconPress') } = this.props
        return (
            <Animated.View style={this.rotateAndTranslate}>
                <TouchableOpacity
                    style={{ paddingHorizontal: 10, alignItems: 'flex-end', justifyContent: 'flex-end' }}
                    onPress={onIconPress}
                >
                    <TabBarIcon
                        tintColor={Colors.textColor}
                        size={20}
                        focused={true}
                        name={'chevron-right'}
                    />
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

export default ScreenTitle