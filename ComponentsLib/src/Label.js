import React from 'react';
import {
    View,
    Text,
    Dimensions
} from 'react-native';
import Constants from 'expo-constants';

import { getFontScale } from '../constants/Layout';
import Colors from '../constants/Colors';
import { Feather } from '@expo/vector-icons';
const moment = require('moment-timezone');
const { height } = Dimensions.get('window');
const statusBarHeight = Constants.statusBarHeight

export default class Label extends React.Component {

    render() {
        const { name = "Наименование", heightToStyle, date = new Date(), iconName = "send" } = this.props;
        return (
            <View style={{
                position: "absolute",
                top: 0,
                bottom: height - statusBarHeight - heightToStyle,
                left: 0,
                right: 0,
                justifyContent: "center",
                alignItems: "center"
            }} >
                <View
                    style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}
                >
                    <Feather
                        name={iconName}
                        size={31}
                        style={{ marginBottom: 0, paddingBottom: 10 }}
                        color={Colors.chipTextSelected}
                    />
                    <Text
                        numberOfLines={2}
                        ellipsizeMode={"tail"}
                        style={{
                            fontSize: getFontScale(22),
                            color: Colors.chipTextSelected,
                            fontFamily: "sf-ui-display-semibold",
                            paddingBottom: 10,
                            textAlign: "center"
                        }}>{name}</Text>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode={"tail"}
                        style={{
                            fontSize: getFontScale(14),
                            color: Colors.chipTextSelected,
                            fontFamily: "sf-ui-display-semibold"
                        }}>{moment(date).format('LLL')}</Text>
                </View>

            </View>
        );
    }
}