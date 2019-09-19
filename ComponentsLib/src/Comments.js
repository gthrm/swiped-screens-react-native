import React from 'react';
import {
    View
} from 'react-native';

import Comment from './Comment';
import { loremIpsum } from '../constants/Strings';
import {
    url,
    port
} from '../etc/config.json';

export default class Comments extends React.Component {

    render() {
        const {
            comments = [{
                user: {
                    id: '01000101028765',
                    firstname: 'Человек',
                    lastname: 'Лол',

                },
                photo: 'https://artchive.ru/res/media/img/oy1000/work/d7e/366081@2x.jpg',
                name: "Имя Человека",
                text: loremIpsum,
                date: new Date(),

            }]
        } = this.props;
        return (
            <View  >
                {comments.map(
                    comment => <Comment
                        userId={comment.user.id}
                        id={comment.id}
                        key={comment.text + comment.date}
                        name={`${comment.user.firstname ? comment.user.firstname : 'Неопознанная'} ${comment.user.lastname ? comment.user.lastname : 'куропатка'}`}
                        commentText={comment.text}
                        time={comment.date}
                        avatarUri={{ uri: `${url}:${port}${comment.photo}` }}
                    />
                )}
            </View>
        );
    }
}