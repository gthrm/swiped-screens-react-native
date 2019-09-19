import React from 'react';
import { View } from "react-native";
import BookMarkButton from './BookMarkButton';

class BookMarkButtonBox extends React.Component {

    render() {
        const { focused, tintColor, focusedTintColor, onPress = () => console.log("press", idToPress), idToPress = "test" } = this.props
        return (
            <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}>
                <BookMarkButton focused={focused} tintColor={tintColor} focusedTintColor={focusedTintColor} onPress={onPress} idToPress={idToPress} />
            </View>
        );
    }
}

export default BookMarkButtonBox;