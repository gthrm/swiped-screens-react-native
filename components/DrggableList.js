import React, { Component } from 'react'
import styled from 'styled-components'
import DraggableFlatList from 'react-native-draggable-flatlist'

const Container = styled.View`
    flex: 1;
    min-width: 100%;
    background-color: red;
    align-items: center;
    justify-content: center;
`

const Item = styled.TouchableOpacity`
    height: 100px;
    min-width: 100%;
    background-color: ${p => p.isActive ? 'blue' : 'green'};
    align-items: center;
    justify-content: center;
`

const ItemText = styled.Text`
    font-weight: bold;
    color: white;
    font-size: 32px;
`

class DrggableList extends Component {

    state = {
        data: [...Array(20)].map((d, index) => ({
            key: `item-${index}`,
            label: index,
            backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index * 5}, ${132})`,
        }))
    }



    renderItem = ({ item, index, move, moveEnd, isActive }) => {
        return (
            <Item
                isActive={isActive}
                onLongPress={move}
                onPressOut={moveEnd}
            >
                <ItemText>{item.label}</ItemText>
            </Item>
        )
    }
    render() {
        const { photo } = this.state
        return (
            <Container>
                <DraggableFlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => `draggable-item-${item.key}`}
                    scrollPercent={5}
                    onMoveEnd={({ data }) => this.setState({ data })}
                />
            </Container>
        )
    }
}

export default DrggableList