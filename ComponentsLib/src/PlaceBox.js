import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { getPixelSizeForLayoutSize, getFontScale } from '../constants/Layout';
import Colors from '../constants/Colors';

export default class PlaceBox extends React.Component {

    render() {
        const { place = "Место проведения мероприятия", sizeType } = this.props;
        return (
            <View style={{ flex: 1, paddingTop: sizeType === 2 ? 30 : 15, paddingBottom: sizeType === 2 ? 0 : 15, paddingRight: sizeType === 2 ? 0 : 15, justifyContent: sizeType === 2 ? 'flex-end' : 'center' }} >
                <Text
                    numberOfLines={2}
                    ellipsizeMode={"tail"}
                    style={{
                        fontSize: getFontScale(sizeType === 2 ? 16 : 12),
                        color: Colors.textPlace,
                        fontFamily: "sf-ui-display-semibold"
                    }}>{place}</Text>
            </View>
        );
    }
}