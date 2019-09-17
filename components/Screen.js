import React from 'react';
import { Image } from 'react-native'
import styled from 'styled-components';
import axios from 'axios'
import { decode as atob, encode as btoa } from 'base-64'

import { width } from '../constatnts/Layout';

const server = {
    host: 'http://localhost',
    port: 8080
}


const Container = styled.View`
    background-color: ${p => p.color ? p.color : 'green'};
    width: ${width * 0.8};
    justify-content: center;
    align-items: center;
`

const ScreenText = styled.Text`
    font-size: 22px;
    line-height: 26px;
`


class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: undefined
        }
    }
    _imageEncode(arrayBuffer, contentType) {
        let u8 = new Uint8Array(arrayBuffer)
        let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer), function (p, c) { return p + String.fromCharCode(c) }, ''))
        let mimetype = contentType || "image/png"
        return "data:" + mimetype + ";base64," + b64encoded
    }

    componentDidMount() {
        this.api()
            .then(
                req => {
                    // const arrayBufferView = new Uint8Array(req.data.data);
                    // const blob = new Blob([arrayBufferView], { type: req.data.contentType });
                    const photoData = this._imageEncode(req.data.data.data, req.data.contentType);
                    // console.log(photoData);
                    this.setState({ photo: photoData })
                }
            )
            .catch(
                err => console.log(err)
            )
    }

    render() {
        const { title = 'First Screen', style, color, data: Data } = this.props
        const { photo } = this.state
        return (
            <Container
                color={color}
                style={style}
            >
                {/* <DrggableList/> */}
                {Data ? <Data />
                    : photo
                        ? <Image
                            style={{ width: 300, height: 300, top: 0, left: 0 }}
                            // source={photo}
                            source={{
                                uri: photo
                            }}
                        />
                        : null
                }

            </Container>
        )
    }

    api() {
        const id = '5d812cb81d7189072614d66e'
        const { host, port } = server;
        const basicAuth = 'Basic ' + btoa('name' + ':' + 'password');
        const request = axios.create({
            headers: {
                "Authorization": basicAuth
            }
        });
        return request.get(`${host}:${port}/images/${id}`);
    }
}





export default Screen;