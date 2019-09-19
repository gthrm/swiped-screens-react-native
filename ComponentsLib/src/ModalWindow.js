import React, { Component } from 'react';
import { Animated, Easing, Text } from 'react-native';
import ScrollChips from './ScrollChips';
import Chips from './Chips';

class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.position = new Animated.Value(this.props.modalVisible ? 1 : 0);
        this.opacityValue = new Animated.Value(this.props.modalVisible ? 1 : 0);
        this.resize = this.position.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 60],
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
        return (
            <Animated.View style={this.translate}>
                <ScrollChips data={this.props.data} onPress={this.props.changeFilter} />
                {/* <Chips /> */}
            </Animated.View>
        );
    }
}

export default ModalWindow;