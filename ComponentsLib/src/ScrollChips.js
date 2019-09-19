import React from 'react';
import {
    ScrollView
} from 'react-native';

import Chips from './Chips';

export default class ScrollChips extends React.Component {

    render() {
        const { data = [], onPress } = this.props;
        return (
            <ScrollView horizontal style={{ flexDirection: "row" }} contentContainerStyle={{ padding: 10 }} >
                {data.map(
                    item => <Chips selected={item.selected} title={item.title} key={item.id} onPress={() => onPress(item.id)} />
                )}
            </ScrollView>
        );
    }
}