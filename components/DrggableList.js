import React, { Component } from 'react'
import {
    RefreshControl
} from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components'
import DraggableFlatList from 'react-native-draggable-flatlist'

import ComponentLib from '../ComponentsLib';
import RecyclingPanel from '../components/RecyclingPanel';

const Container = styled.View`
    flex: 1;
    min-width: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px 20px 0px 20px;
`

const Item = styled.TouchableOpacity`
    padding-left: 10px;
    padding-right: 15px;
    min-width: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,.5)
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
                    />
                    : null}
            </Container>
        )
    }
}

export default DrggableList