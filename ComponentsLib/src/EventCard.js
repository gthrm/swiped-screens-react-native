import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Platform,
    LayoutAnimation,
    UIManager
} from 'react-native';
import Colors from '../constants/Colors';
import SubscribeCounter from './SubscribeCounter';
import ViewCounter from './ViewCounter';
import BookMarkButtonBox from './BookMarkButtonBox';
import TimeBox from "./TimeBox";
import PlaceBox from "./PlaceBox";
import GreatestButton from "./GreatestButton";

import { getFontScale } from '../constants/Layout';

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const EventCard = ({
    cardData: {
        id = "000001",
        title = "Заголовок",
        description = "Оисание конференции",
        subscribers_counter = 10,
        viewers_counter = 10,
        viewed = false,
        date = new Date(),
        place: {
            id: placeId = "00001",
            title: placeTitle = "Место"
        } = { id: placeId = "00001", title: placeTitle = "Место" },
        subscribed
    },
    subscribeHandler = () => console.log('onPress to subscribe, card id:', id),
    openEventHandler
}) => {
    LayoutAnimation.configureNext({ duration: 500, create: { type: 'easeInEaseOut', property: 'opacity' } });
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={openEventHandler}
            style={styles.container}>
            <View style={styles.leftPart}>
                <View style={styles.timePlaceContainer}>
                    <TimeBox date={date} />
                    <PlaceBox placeId={placeId} place={placeTitle} />
                </View>
                <View style={{ paddingTop: 10 }}>
                    <GreatestButton
                        text={subscribed ? 'Пойду' : 'Интересует'}
                        isPressed={subscribed}
                        onPress={subscribeHandler}
                        eventId={id}
                    />
                </View>
            </View>
            <View style={styles.rightPart}>
                <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={{
                        fontSize: getFontScale(16),
                        fontFamily: "sf-ui-display-semibold"
                    }}>
                    {title}
                </Text>
                <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={{
                        paddingTop: 10,
                        fontSize: 14,
                        fontFamily: "sf-ui-display-light"
                    }}>
                    {description}
                </Text>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                    <SubscribeCounter subscribeCounter={subscribers_counter} />
                    <ViewCounter viewCounter={viewers_counter} />
                    {/* <BookMarkButtonBox
                        focused={subscribed}
                        tintColor={Colors.otherTextColor}
                        focusedTintColor={Colors.focusedBookmarkColor}
                    /> */}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        backgroundColor: "green",
        flex: 1,
        marginBottom: 20,
        flexDirection: "row",
        backgroundColor: Colors.backgroundEventCard,
        paddingLeft: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
        ...Platform.select({
            ios: {
                shadowColor: Colors.eventCardsShadow,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 15,
            },
            android: {
                elevation: 20,
            },
        }),
    },
    leftPart: {
        flex: 0.3
    },
    rightPart: {
        paddingLeft: 15,
        flex: 0.7
    },
    timePlaceContainer: {
        paddingLeft: 10,
        borderRightColor: Colors.borderLeftColor,
        borderRightWidth: 3
    }
});

export default EventCard