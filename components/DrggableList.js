import React, { Component } from 'react'
import {
    RefreshControl,
    LayoutAnimation
} from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components'
import DraggableFlatList from 'react-native-draggable-flatlist'

import ComponentLib from '../ComponentsLib'

const Container = styled.View`
    flex: 1;
    min-width: 100%;
    align-items: center;
    justify-content: center;
`

const Item = styled.TouchableOpacity`
    padding-left: 10px;
    padding-right: 15px;
    min-width: 100%;
    align-items: center;
    justify-content: center;
`

const RecyclingPanel = styled.View`
    right: 0px;
    left: 0px;
    bottom: 0px;
    height: ${p => p.statusBarHeight ? p.statusBarHeight + 40 : 40};
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: #99b1c6;
    padding-bottom: ${p => p.statusBarHeight ? p.statusBarHeight : 40};
`

const TextRecyclingPanel = styled.Text`
    font-size: 22px;
    line-height: 26px;
    color: #ededed;
`

class DrggableList extends Component {

    state = {
        recyclingPanelIsOpen: false,
        refreshing: false,
        image: undefined
    }

    renderItem = ({ item, index, move, moveEnd, isActive }) => {
        return (
            <Item>
                <ComponentLib.LectureItem
                    isActive={isActive}
                    onLongPress={move}
                    onPressOut={moveEnd}
                    lecture={{
                        id: item._id,
                        name: item.description,
                        title: item.title,
                        date: item.expiriesDate,
                        avatarUri: { uri: 'https://picsum.photos/200/300.jpg' }
                    }}

                />
            </Item>
        )
    }
    _onRefresh = () => {
        this.props.getCheck()
    }

    onMoveBegin = () => {
        console.log('openRecyclingPanel');
        this.changeRecyclingPanel()
    }

    onMoveEnd = ({ data }) => {
        this.props.changeStateCheck(data);
        this.changeRecyclingPanel()
    };

    changeRecyclingPanel = () => {
        const { recyclingPanelIsOpen } = this.state
        LayoutAnimation.configureNext({ duration: 300, create: { type: 'easeInEaseOut', property: 'opacity' }, update: { type: 'easeInEaseOut', springDamping: 0.4 }, delete: { type: 'easeInEaseOut', property: 'opacity' } });
        this.setState({ recyclingPanelIsOpen: !recyclingPanelIsOpen })
    }

    render() {
        const { recyclingPanelIsOpen } = this.state
        return (
            <Container>
                <DraggableFlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                    data={this.props.checks}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => `draggable-item-${item._id}`}
                    scrollPercent={5}
                    onMoveBegin={this.onMoveBegin}
                    onMoveEnd={this.onMoveEnd}
                />
                {recyclingPanelIsOpen
                    ? <RecyclingPanel
                        statusBarHeight={Constants.statusBarHeight}
                    >
                        <TextRecyclingPanel>RecyclingPanel</TextRecyclingPanel>
                    </RecyclingPanel>
                    : null}
            </Container>
        )
    }
}

export default DrggableList