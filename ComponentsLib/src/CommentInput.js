import React from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { Avatar } from 'react-native-paper';
import SendIcom from '../assets/icon/send.png';

import Colors from '../constants/Colors';
import {
    url,
    port
} from '../etc/config.json';

const CommentTextInput = (props) => {
    return (
        <TextInput
            style={{
                borderColor: Colors.borderColor,
                borderWidth: 1,
                borderRadius: 5,
                padding: 5
            }}
            {...props}
            editable
            maxLength={280}
        />
    );
}

const CommentInput = ({
    avatarUri = { uri: `${url}:${port}/uploads/default_avatar.png` },
    style,
    userId,
    onPressToAvatar = (id) => console.log('onPress to avatar user id: ', id, 'connect onPressToAvatar function to CommentInput component props'),
    onPressToSendComment = (text) => console.log('onPress to send comment, text: ', text, 'connect onPressToSendComment function to CommentInput component props'),
}) => {

    const [value, onChangeText] = React.useState();
    const _onSendComment = (text) => {
        onChangeText();
        onPressToSendComment(text);
    }

    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', ...style }} >
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => onPressToAvatar(userId)}>
                <Avatar.Image size={38} source={avatarUri} />
            </TouchableOpacity>

            <View style={{ flex: 1, paddingLeft: 10 }}>

                <CommentTextInput
                    onSubmitEditing={() => _onSendComment(value)}
                    numberOfLines={3}
                    placeholder='Написать комментарий...'
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    returnKeyType="send"
                />
            </View>
            <View style={{ paddingLeft: 10 }}>
                <TouchableOpacity
                    disabled={!value}
                    activeOpacity={0.7}
                    onPress={() => _onSendComment(value)}>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: value ? Colors.descriptionText : Colors.borderColor
                        }}
                        source={SendIcom}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default CommentInput;