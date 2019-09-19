import React from 'react';
import {
    Text,
    View
} from 'react-native';
import { getPixelSizeForLayoutSize, getFontScale } from '../constants/Layout';
import Colors from '../constants/Colors';

const SubscribeCounter = ({ subscribeCounter = 0 }) => {
    return (
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start" }}>
            <View style={{
                color: Colors.otherTextColor,
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "green"
            }}>
                <Text style={{
                    color: Colors.otherTextColor,
                    fontSize: getFontScale(13),
                    fontFamily: "sf-ui-display-medium"
                }}>
                    Пойдут:
                <Text style={{
                        fontSize: getFontScale(13),
                        fontFamily: "sf-ui-display-semibold", color: Colors.otherTextColor
                    }}>
                        {" " + subscribeCounter}
                    </Text>
                </Text>
            </View >
        </View>
    )
}
export default SubscribeCounter