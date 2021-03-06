import React from 'react';
import {
    Animated,
    View,
    LayoutAnimation,
    Platform,
    UIManager
} from 'react-native';

import ScreenTitle from './ScreenTitle';
import LectureItem from './LectureItem';


class LecturesPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lecturesPanelIsOpen: false,
            maxHeight: null,
            minHeight: 0
        }
        this.animatedValue = new Animated.Value(0);
        this.resizePosition = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, this.state.maxHeight],
            // extrapolate: "identity"
        });
        this.opacity = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            // extrapolate: "identity"
        });
    }

    pressToTitle = () => {
        LayoutAnimation.configureNext({ duration: 500, create: { type: 'easeInEaseOut', property: 'opacity' }, update: { type: 'easeInEaseOut', springDamping: 0.4 }, delete: { type: 'easeInEaseOut', property: 'opacity' } });
        this.setState({ lecturesPanelIsOpen: !this.state.lecturesPanelIsOpen });
    }

    render() {
        const {
            lectures = [],
        } = this.props

        return (
            <View style={[{ paddingTop: 10, flex: 1 }]} >
                <ScreenTitle
                    type={2}
                    focused={this.state.lecturesPanelIsOpen}
                    title={"Доклады"} icon={true}
                    onIconPress={this.pressToTitle.bind(this)}
                />
                <Animated.View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20 }, { height: this.state.lecturesPanelIsOpen ? null : 0, overflow: 'hidden', opacity: this.state.lecturesPanelIsOpen ? 1 : 0 }]}>
                    {lectures.map(
                        lecture => <LectureItem key={lecture.id} lecture={lecture} />
                    )}
                </Animated.View>
            </View >
        )
    }


}

export default LecturesPanel