import * as React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";
import Colors from "../constants/Colors";

class Button extends React.Component {
    render() {
        const { disabled, label, onPress } = this.props;
        // If the button is disabled we lower its opacity
        const containerStyle = [
            styles.container,
            disabled
                ? styles.containerDisabled
                : styles.containerEnabled
        ];
        return (
            <TouchableOpacity
                style={containerStyle}
                onPress={() => onPress(false)}
                disabled={disabled}
            >
                <Text style={styles.text}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.hightLightColor,
        marginTop: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.borderColor
    },
    containerEnabled: {
        opacity: 1
    },
    containerDisabled: {
        opacity: 0.3
    },
    text: {
        color: Colors.background,
        textAlign: "center",
        height: 20
    }
});

export default Button;