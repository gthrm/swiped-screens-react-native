import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';
import { Avatar } from 'react-native-paper';
import styled, { css } from 'styled-components/native';
import { loremIpsum } from '../constants/Strings';

const moment = require('moment-timezone');

const Name = styled.Text`
    color: ${Colors.tag};
    font-family: sf-ui-display-bold;
    font-size: 14px;
    text-align: left;
    margin-bottom: 5px;
`

const CommentText = styled.Text`
    font-family: sf-ui-display-medium;
    font-size: 14px;
    line-height: 16px;
    color: ${Colors.textColor};
    margin-bottom: 10px;
    margin-top: 5px;
`

const Time = styled.Text`
    font-family: sf-ui-display-medium;
    font-size: 14px;
    line-height: 16px;
    color: ${Colors.descriptionText};
`

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentIsOppen: false,
            avatarUri: { uri: `uploads/default_avatar.png` }
        }
    }

    openComment = () => {
        this.setState({ commentIsOppen: !this.state.commentIsOppen })
    }

    render() {
        const { avatarUri: avatarUriState, commentIsOppen } = this.state
        const { name = "Имя Человека", avatarUri = avatarUriState, commentText = loremIpsum, style, time = new Date(), userId, onPressToAvatar = (id) => console.log('onPress to avatar user id: ', id, 'connect onPressToAvatar function to Comments component props'), ...other } = this.props;
        return (
            <View
                {...other}
                style={{ flexDirection: 'row', ...style, justifyContent: 'flex-start', paddingBottom: 10 }}
            >
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => onPressToAvatar(userId)}>
                    <Avatar.Image size={38} source={avatarUri} />
                </TouchableOpacity>

                <View style={{ flex: 1, paddingLeft: 10 }}>
                        {/* <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => onPressToAvatar(userId)}> */}
                            <Name
                                numberOfLines={1}
                                ellipsizeMode={"tail"}
                            >
                                {name}
                            </Name>
                        {/* </TouchableOpacity> */}
                    <CommentText
                        onPress={this.openComment}
                        numberOfLines={commentIsOppen ? null : 2}
                        ellipsizeMode={"tail"}>
                        {commentText}
                    </CommentText>
                    <Time>{moment(time).subtract(0, 'days').calendar()}</Time>
                </View>
            </View>
        );
    }
}