import React, { Component } from 'react'
import {
    RefreshControl
} from 'react-native';
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

class DrggableList extends Component {

    static getDerivedStateFromProps(props, state) {
        if (state.data !== props.checks) {
            return {
                data: props.checks,
                refreshing: false
            }
        }
        return null
    }

    state = {
        data: [],
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
                        date: item.expiriesDate
                    }}
                />
            </Item>
        )
    }
    _onRefresh = () => {
        this.props.getCheck()
    }

    render() {
        return (
            <Container>
                <DraggableFlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => `draggable-item-${item._id}`}
                    scrollPercent={5}
                    onMoveEnd={({ data }) => this.setState({ data })}
                />
            </Container>
        )
    }
}

export default DrggableList