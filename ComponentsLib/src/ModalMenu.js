import React, { Component } from 'react';
import { Animated, Easing, TouchableOpacity, Text } from 'react-native';
import Colors from '../constants/Colors';

class ModalMenu extends Component {
    constructor(props) {
        super(props);
        this.heightMenu = 0
        this.position = new Animated.Value(this.props.modalVisible ? 1 : 0);
        this.opacityValue = new Animated.Value(this.props.modalVisible ? 1 : 0);
        this.resize = this.position.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100],
            extrapolate: "identity"
        });
        this.opacity = this.opacityValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: "identity"
        });
        this.translate = {
            flex: 1,
            opacity: this.opacity,
            maxHeight: this.resize
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            if (!this.props.modalVisible) {
                Animated.timing(
                    this.opacityValue,
                    {
                        toValue: this.props.modalVisible ? 1 : 0,
                        duration: 300,
                        easing: Easing.linear
                    }
                ).start(
                    () => {
                        Animated.timing(
                            this.position,
                            {
                                toValue: this.props.modalVisible ? 1 : 0,
                                duration: 300,
                                easing: Easing.linear
                            }
                        ).start()
                    }
                )
            } else {
                Animated.timing(
                    this.position,
                    {
                        toValue: this.props.modalVisible ? 1 : 0,
                        duration: 300,
                        easing: Easing.linear
                    }
                ).start(
                    () => {
                        Animated.timing(
                            this.opacityValue,
                            {
                                toValue: this.props.modalVisible ? 1 : 0,
                                duration: 300,
                                easing: Easing.linear
                            }
                        ).start()
                    }
                )
            }

        }
    }

    render() {
        const { data = [] } = this.props
        return (
            <Animated.View
                style={[this.translate, { paddingHorizontal: 15, paddingVertical: 10 }]}

            >
                {data.map(
                    (item, index, array) => <MenuItem
                        screenName={item.screenName}
                        onPress={this.props.onPress}
                        key={item.id}
                        title={item.title}
                        arrayLengthAndIndex={array.length === index + 1}
                    />
                )}
            </Animated.View>
        );
    }
}
const MenuItem = ({ title, arrayLengthAndIndex, onPress, screenName }) => {
    return (
        <TouchableOpacity
            style={{
                justifyContent: 'center',
                borderColor: Colors.borderColor,
                borderBottomWidth: !arrayLengthAndIndex ? 1 : 0
            }}
            onPress={() => onPress(screenName)}
        >
            <Text
                style={{
                    fontSize: 18,
                    padding: 10,
                    fontFamily: "sf-ui-display-semibold",
                    color: Colors.menuColor
                }}
            >{title}</Text>
        </TouchableOpacity>
    )
}

export default ModalMenu;