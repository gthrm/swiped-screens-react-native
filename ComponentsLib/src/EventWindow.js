import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

import Colors from '../constants/Colors';

import TimeBox from "./TimeBox";
import PlaceBox from "./PlaceBox";
import GreatestButton from "./GreatestButton";
import Tags from './Tags';
import CommentPanel from './CommentPanel';
import LecturesPanel from './LecturesPanel';
import PapersPanel from './PapersPanel';

const Title = styled.Text`
    color: ${Colors.textColor};
    font-family: sf-ui-display-medium;
    font-size: 18px;
    border-bottom-width: 1px;
    text-align: left;
    border-color: ${Colors.borderColor};
`

const Description = styled.Text`
    font-family: sf-ui-display-medium;
    font-size: 14px;
    line-height: 23px;
    color: ${Colors.descriptionText};
`

class EventWindow extends React.Component {
    render() {
        const {
            id: eventId = "0001",
            title = 'Заголовок',
            description = 'Описание',
            subscribed = false,
            tags = [],
            comments = [],
            papers = [],
            viewers_counter = 0,
            subscribers_counter = 0,
            date = new Date(),
            place: {
                id: placeId = "00001",
                title: placeTitle = "Место"
            } = { placeId: "00001", placeTitle: "Место" },
            lectures = [],
            addEventToCalendar,
            subscribeHandler = (id) => { console.log(id) },
            onPressToSendComment = (text) => console.log('onPress to send comment, text: ', text, 'connect onPressToSendComment prop to EventWindow component on EventScreen '),
            onPressToDownload = (path) => console.log('onPress to Download, path: ', path, '; connect onPressToDownload props to EventWindow component'),
            onPressToPaper = (id) => console.log('onPress to PaperItem, id: ', id, '; connect onPressToPaper props function to EventWindow component')
        } = this.props

        return (
            <View style={{}}>
                <View style={{ paddingHorizontal: 20 }}>
                    <Title style={{ paddingTop: 20 }}>{title}</Title>
                    <View style={{ flexDirection: "row", marginTop: 30 }}>
                        <View style={{ flex: 1, justifyContent: "flex-end" }}>
                            <View style={styles.timePlaceContainer}>
                                <TimeBox
                                    sizeType={2}
                                    date={date}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: 'flex-start' }}>
                                <GreatestButton
                                    sizeType={2}
                                    text={subscribed ? 'Пойду' : 'Интересует'}
                                    isPressed={subscribed}
                                    onPress={subscribeHandler}
                                    eventId={eventId}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: "flex-end" }}>
                            <View style={[styles.timePlaceContainer, { alignItems: 'flex-end' }]}>
                                <PlaceBox
                                    sizeType={2}
                                    placeId={placeId}
                                    place={placeTitle}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: "flex-end" }}>
                                <GreatestButton
                                    sizeType={2}
                                    text={'На карте'}
                                    color={Colors.mapButton}
                                    textColor={'#fff'}
                                    onPress={this.goToMap}
                                    eventId={eventId}
                                />
                            </View>

                        </View>
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <Description>{description}</Description>

                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <Tags
                            tags={tags}
                        />

                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <CommentPanel
                            addEventToCalendar={addEventToCalendar}
                            comments={comments}
                            onPressToSendComment={onPressToSendComment}
                        />
                    </View>
                </View>
                <View style={{ paddingVertical: 10, backgroundColor: Colors.separator }}>

                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ paddingVertical: 10 }}>
                        <LecturesPanel
                            lectures={lectures}
                        />
                    </View>
                </View>
                <View style={{ paddingVertical: 10, backgroundColor: Colors.separator }}>

                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ paddingVertical: 10 }}>
                        <PapersPanel
                            papers={papers}
                            onPressToDownload={onPressToDownload}
                            onPressToPaper={onPressToPaper}
                        />
                    </View>
                </View>
            </View>
        );
    }

    goToMap = (id) => {
        console.log('goToMap', id);

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scrollContainer: {
        flex: 1
    },
    contentContainer: {
        paddingTop: Constants.statusBarHeight,
    },
    mainBgImageWrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: Constants.statusBarHeight + 150,
        justifyContent: "center",
        alignItems: "center",
        bottom: 50,
    },
    mainBgImage: {
        flex: 1,
        resizeMode: "contain"
    },
    timePlaceContainer: {
        paddingLeft: 0
    }
});

export default EventWindow;