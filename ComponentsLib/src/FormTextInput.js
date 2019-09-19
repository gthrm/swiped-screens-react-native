import * as React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import Colors from "../constants/Colors";

class FormTextInput extends React.Component {
    textInputRef = React.createRef();

    focus = () => {
        if (this.textInputRef.current) {
            this.textInputRef.current.focus();
        }
    };

    render() {
        const { error, style, ...otherProps } = this.props;
        return (
            <View style={[styles.container, style]}>
                <TextInput
                    ref={this.textInputRef}
                    selectionColor={Colors.textColor}
                    style={styles.textInput}
                    {...otherProps}
                />
                <Text style={styles.errorText}>{error || ""}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    textInput: {
        color: Colors.textColor,
        textAlign: 'center',
        height: 40,
        borderColor: Colors.tintColor,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    errorText: {
        // Setting a fixed text height prevents the label
        // "jump" when we show/hide it
        height: 20,
        color: Colors.hightLightColor
    }
});

export default FormTextInput;