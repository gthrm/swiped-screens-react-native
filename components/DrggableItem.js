import React, { Component } from 'react'
import styled from 'styled-components'

import ComponentLib from '../ComponentsLib';
import { _imageEncode } from '../constatnts/Layout';
import api from '../api';

const Item = styled.TouchableOpacity`
    padding-left: 10px;
    padding-right: 15px;
    min-width: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,.5)
`

class DrggableItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: { uri: null }
        }
    }

    componentDidMount() {
        const { item } = this.props
        if (item.image)
            this.getImage(item.image)
    }

    getImage = async (id) => {
        await api.apiGetImage(id)
            .then(
                async ({ data }) => {
                    await _imageEncode(data.data.data, data.contentType)
                        .then(photoData => {
                            this.setState(prevState => ({ image: { ...prevState.image, uri: photoData } }))
                            // return photoData
                        })

                }
            )
            .catch(
                err => console.log(err)
            )
    }

    render() {
        const { image } = this.state;
        const { item, index, move, moveEnd, isActive } = this.props
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
                        avatarUri: image
                    }}
                />
            </Item>
        )
    }
}

export default DrggableItem;