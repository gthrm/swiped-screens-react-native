import {
    Animated,
    Easing
} from 'react-native';
export const fadeIn = (fadeInValue) => {
    fadeInValue.setValue(0)
    setTimeout(() => {
        Animated.timing(
            fadeInValue,
            {
                toValue: 1,
                duration: 200,
                easing: Easing.linear
            }
        ).start()
    }, 100);
}

export const changeOpacity = (isFoqused, opacityValue) => {
    opacityValue.setValue(0)
    setTimeout(() => {
        Animated.timing(
            opacityValue,
            {
                toValue: !isFoqused ? 1 : 0,
                duration: 300,
                easing: Easing.linear
            }
        ).start()
    }, 100);
}