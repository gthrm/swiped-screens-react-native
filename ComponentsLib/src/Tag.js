import React from 'react';
import {
    Text
} from 'react-native';

import Colors from '../constants/Colors';

export default class Tag extends React.Component {

    render() {
        const {
            style = {
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '500',
                fontFamily: 'sf-ui-display-medium',
                color: Colors.tag,
                textTransform: 'lowercase'
            },
            tadDate,
            openEventHandler = (id) => console.log('connect openEventHandler prop to EventCards, id:', id)
        } = this.props;
        return <Text
            style={{...style}}
            onPress={() => openEventHandler(tadDate.id)}
        >
            #{tadDate.title.replace(/ /g, "_") + " "}
        </Text>;
    }
}