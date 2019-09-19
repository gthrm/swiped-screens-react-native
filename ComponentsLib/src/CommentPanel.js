import React from 'react';
import {
    TouchableOpacity,
    View,
    LayoutAnimation,
    UIManager
} from 'react-native';
import styled from 'styled-components/native';

import Colors from '../constants/Colors';
import ViewCounter from './ViewCounter';
import TabBarIcon from './TabBarIcon';
import BookMarkButtonBox from './BookMarkButtonBox';
import layout from '../constants/Layout';
import Comments from './Comments';
import CommentInput from './CommentInput';
const { border } = layout;

const ShowMoreComments = styled.Text`
    padding: 12px 0px 11px;
    font-weight: 500;
    line-height: 14px;
    font-size: 13px;
    font-family: sf-ui-display-medium;
    color: ${Colors.lecturesTitle};
`

class CommentPanel extends React.Component {

    static getDerivedStateFromProps(props, state) {
        if (props.comments !== state.comments) {
            const newComments = props.comments.slice(-3)
            return {
                comments: newComments
            }
        }
        return null
    }

    constructor(props) {
        super(props);
        this.state = {
            commentsIsOpen: false,
            comments: []
        }
    }

    showMoreComments = () => {
        const { commentsIsOpen } = this.state
        const { comments } = this.props;
        LayoutAnimation.configureNext({ duration: 300, create: { type: 'easeInEaseOut', property: 'opacity' }, update: { type: 'easeInEaseOut', springDamping: 0.4 }, delete: { type: 'easeInEaseOut', property: 'opacity' } });
        if (this.state.commentsIsOpen) {
            const newComments = comments.slice(-3)
            this.setState({ comments: newComments, commentsIsOpen: !commentsIsOpen })
        } else {
            this.setState({ comments, commentsIsOpen: !commentsIsOpen })
        }

    }

    render() {
        const { comments, commentsIsOpen } = this.state
        const {
            viewCounter = 124,
            onIconPress = () => console.log('Connect onIconPress props to ComponentIcon class'),
            addEventToCalendar,
            // comments = [],
            onPressToSendComment = (text) => console.log('onPress to send comment, text: ', text, 'connect onPressToSendComment function to CommentPanel component props'),
        } = this.props
        return (
            <View style={{}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...border, paddingBottom: 20 }}>
                    <ViewCounter
                        viewCounter={viewCounter}
                        style={{
                            flex: 0.8
                        }}
                    />
                    <View style={{ flex: 0.2, flexDirection: 'row' }}>
                        <ComponentIcon onIconPress={addEventToCalendar} iconName='calendar' size={17} />
                        <BookMarkButtonBox />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', paddingVertical: 10 }}>
                    <Comments comments={comments} style={{}} />
                    <ShowMoreComments
                        onPress={this.showMoreComments}
                    >
                        {commentsIsOpen ? 'Скрыть комментарии' : 'Показать все комментарии'}
                    </ShowMoreComments>
                    <CommentInput onPressToSendComment={onPressToSendComment} />
                </View>
            </View>
        )
    }


}

class ComponentIcon extends React.Component {

    render() {
        const { onIconPress = () => console.log('onIconPress'), iconName = 'calendar', size = 20 } = this.props
        return (
            <TouchableOpacity
                style={{}}
                onPress={onIconPress}
            >
                <TabBarIcon
                    tintColor={Colors.textColor}
                    size={size}
                    focused={true}
                    name={iconName}
                />
            </TouchableOpacity>
        )
    }
}

export default CommentPanel