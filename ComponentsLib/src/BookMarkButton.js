import React from 'react';
import { TouchableOpacity } from "react-native";
import {
    MaterialCommunityIcons
} from '@expo/vector-icons';
import { getPixelSizeForLayoutSize, getFontScale } from '../constants/Layout';
class BookMarkButton extends React.Component {

    render() {
        const { focused, tintColor, focusedTintColor, onPress = () => console.log("press", idToPress), idToPress = "test" } = this.props
        return (
            <TouchableOpacity onPress={() => onPress(idToPress)}>
                <MaterialCommunityIcons
                    name={focused ? "bookmark" : "bookmark-outline"}
                    size={19}
                    style={{ marginBottom: 0 }}
                    color={focused ? focusedTintColor : tintColor}
                />
            </TouchableOpacity>
        );
    }
}

export default BookMarkButton;