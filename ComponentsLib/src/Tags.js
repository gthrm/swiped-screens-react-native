import React from 'react';
import {
    View
} from 'react-native';

import Tag from './Tag';
import layout from '../constants/Layout';
const { border } = layout;

export default class Tags extends React.Component {

    render() {
        const {
            tags: data = [],
            openEventHandler = (id) => console.log('connect openEventHandler prop to Tags, id:', id)
        } = this.props;
        return (
            <View style={[{
                flex: 1,
                padding: 10,
                paddingBottom: 20,
                flexDirection: 'row',
                flexWrap: 'wrap'
            }, { ...border }]} >
                {data.map(
                    item =>
                        <Tag
                            tadDate={item}
                            key={item.id}
                            openEventHandler={() => openEventHandler(item.id)}
                        />
                )}
            </View>
        );
    }
}