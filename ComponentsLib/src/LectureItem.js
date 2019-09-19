import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';
import { Avatar } from 'react-native-paper';
import styled, { css } from 'styled-components/native';
import { loremIpsum } from '../constants/Strings';
import layout from '../constants/Layout';
import {
    url,
    port
} from '../etc/config.json';
const { border } = layout;


const moment = require('moment-timezone');

const Name = styled.Text`
    color: ${Colors.descriptionText};
    font-family: sf-ui-display-medium;
    font-size: 14px;
    text-align: left;
    padding-bottom: 5px;
`

const LecturesTitle = styled.Text`
    font-family: sf-ui-display-bold;
    font-size: 14px;
    line-height: 19px;
    padding-bottom: 10px;
    color: ${Colors.lecturesTitle};
`

const Time = styled.Text`
    font-family: sf-ui-display-bold;
    font-size: 12px;
    line-height: 19px;
    color: ${Colors.lecturesTime};
`

export default class LectureItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarUri: { uri: `${url}:${port}/uploads/default_avatar.png` }
        }
    }

    render() {
        const { avatarUri: avatarUriState } = this.state
        const {
            lecture: {
                id,
                name = "Имя Человека",
                avatarUri = avatarUriState,
                title = 'Заголовок лекции',
                style,
                date = new Date(),
                userId = 'tested',
                onPressToAvatar = (id) => console.log('onPress to avatar user id: ', id, '; connect onPressToAvatar function to Comments component props'),
                onPressToLectureItem = (id) => console.log('onPress to LectureItem, id: ', id, '; connect onPressToLectureItem props function to LectureItem component')
            } = {
                id: 'tested',
                name: "Имя Человека",
                avatarUri: avatarUriState,
                userId: 'tested',
                title: 'Заголовок лекции',
                time: new Date(),
                onPressToAvatar: (id) => console.log('onPress to avatar user id: ', id, '; connect onPressToAvatar function to Comments component props'),
                onPressToLectureItem: (id) => console.log('onPress to LectureItem, id: ', id, '; connect onPressToLectureItem props function to LectureItem component')
            }

        } = this.props;
        return (
            <TouchableOpacity
                {...this.props}
                onPress={() => onPressToLectureItem(id)}
                style={{ ...style, paddingVertical: 10, ...border, justifyContent: 'space-between', alignItems: 'flex-start' }}
            >
                <LecturesTitle
                    onPress={() => onPressToLectureItem(id)}
                >"{title}"</LecturesTitle>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => onPressToAvatar(userId)}>
                        <Avatar.Image size={38} source={avatarUri} />
                    </TouchableOpacity>

                    <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => onPressToAvatar(userId)}>
                            <Name
                                numberOfLines={1}
                                ellipsizeMode={"tail"}
                            >
                                {name}
                            </Name>
                        </TouchableOpacity>
                        <Time>{moment(date).subtract(0, 'days').calendar()}</Time>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}