import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';
import styled, { css } from 'styled-components/native';
import layout from '../constants/Layout';
import TabBarIcon from './TabBarIcon';

const { border } = layout;

const Title = styled.Text`
    color: ${Colors.textColor};
    font-family: sf-ui-display-medium;
    font-size: 14px;
    text-align: left;
`

const Size = styled.Text`
    font-family: sf-ui-display-medium;
    font-size: 12px;
    line-height: 18px;
    color: ${Colors.lecturesTime};
    margin-right: 20px;
`
const DownloadButtonText = styled.Text`
    font-family: sf-ui-display-bold;
    font-size: 12px;
    line-height: 19px;
    color: ${Colors.downloadButtonText};
    padding-left: 5px;
`

export default class PaperItem extends React.Component {
    render() {
        const {
            paper: {
                id = 'tested',
                path = '/uploads/dd0185fcd78344a38a8cb02a2f65a01aururu.jpg',
                size = "15 KB",
                title = 'Заголовок лекции',
                style = {}
            } = {
                id: 'tested',
                path: '/uploads/dd0185fcd78344a38a8cb02a2f65a01aururu.jpg',
                size: "15 KB",
                title: 'Заголовок материала',
                style: {}
            },
            onPressToDownload = (path) => console.log('onPress to Download, path: ', path, '; connect onPressToDownload props to PaperItem component'),
            onPressToPaper = (id) => console.log('onPress to PaperItem, id: ', id, '; connect onPressToPaper props function to PaperItem component')

        } = this.props;
        return (
            <TouchableOpacity
                {...this.props}
                onPress={() => onPressToPaper(path)}
                style={{ ...style, paddingVertical: 10, ...border, flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}
            >
                <View style={{ flex: 1 }}>
                    <View style={{ paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image
                            style={{ width: 21, height: 21, resizeMode: 'contain' }}
                            source={require('../assets/icon/file.png')}
                        />
                        <View style={{ flex: 1, paddingLeft: 20, justifyContent: 'center' }}>
                            <Title
                                numberOfLines={1}
                                ellipsizeMode={"tail"}
                            >
                                {title}
                            </Title>
                        </View>
                    </View>
                    <View style={{ paddingLeft: 10, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Size>{size}</Size>
                        <TouchableOpacity
                            onPress={() => onPressToDownload(path)}
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            <TabBarIcon
                                tintColor={Colors.downloadButtonText}
                                size={11}
                                focused={true}
                                name={'download'}
                            />
                            <DownloadButtonText>Скачать</DownloadButtonText>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}