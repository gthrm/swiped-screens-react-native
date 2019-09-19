import React from 'react';
import {
    View
} from 'react-native';

import EventCard from './EventCard';



export default class EventCards extends React.Component {

    render() {
        const {
            events: data = [],
            openEventHandler = (id) => console.log('connect openEventHandler prop to EventCards, id:', id),
            subscribeHandler = (id) => console.log('onPress to subscribe, card', id),
        } = this.props;
        return (
            <View style={{ flex: 1, padding: 10 }} >
                {data.map(
                    item =>
                        <EventCard
                            date={item.date}
                            cardData={item}
                            key={item.id}
                            openEventHandler={() => openEventHandler(item.id)}
                            subscribeHandler={subscribeHandler}
                        />
                )}
            </View>
        );
    }
}