import React from 'react';
import {
    View,
    Text
} from 'react-native';

import { getPixelSizeForLayoutSize, getFontScale } from '../constants/Layout';
import Colors from '../constants/Colors';

const moment = require('moment-timezone');

export default class TimeBox extends React.Component {

    render() {
        const { date = new Date("01.01.1970"), sizeType } = this.props;
        return (
            <View style={{ flex: 1 }} >
                <Text style={{
                    fontSize: getFontScale(sizeType === 2 ? 35 : 22),
                    color: Colors.textColor,
                    fontFamily: "sf-ui-display-semibold"
                }}>{moment(date).format('LT')}</Text>
                <Text style={{
                    fontSize: getFontScale(sizeType === 2 ? 14 : 12),
                    color: Colors.otherTextColor,
                    fontFamily: "sf-ui-display-semibold",
                    paddingRight: 5
                }}>{moment(date).startOf('hour').fromNow()}</Text>
            </View>
        );
    }
}