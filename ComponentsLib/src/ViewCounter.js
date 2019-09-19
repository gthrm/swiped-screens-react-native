import React from 'react';
import {
    Text,
    View
} from 'react-native';
import {
    MaterialCommunityIcons
} from '@expo/vector-icons';

import { getPixelSizeForLayoutSize, getFontScale } from '../constants/Layout';
import Colors from '../constants/Colors';

const ViewCounter = ({ viewCounter = 0, style }) => {
    return (
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start", ...style }}>
            <View style={{
                color: Colors.textColor,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                
                // backgroundColor: "green"
            }}>

                <Text style={{

                    fontSize: getFontScale(13),
                    fontFamily: "sf-ui-display-medium", color: Colors.otherTextColor
                }}>
                    <MaterialCommunityIcons
                        name={"eye"}
                        size={14}
                        color={Colors.otherTextColor}
                    />
                    {" " + viewCounter}
                </Text>
            </View >
        </View>
    )
}
export default ViewCounter