import React from 'react';
import { AppLoading, Image } from 'react-native'
import styled from 'styled-components';
import axios from 'axios'
import { decode as atob, encode as btoa } from 'base-64'

import { width } from '../constatnts/Layout'


import {
    host,
    port,
    name,
    password
} from '../config.json'


const Container = styled.View`
    background-color: ${p => p.color ? p.color : '#fff'};
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
            photo: undefined,
            testState: undefined
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.testProps !== this.props.testProps) {
            this.setState({ testState: true })
            return false;
        }
        return true;
    }

    componentDidMount() {
        this.getCheck()
    }

    getCheck = async () => {
        await this.apiGetCheck()
            .then(
                ({ data }) => {
                    console.log('====================================')
                    console.log(data)
                    console.log('====================================')
                    this.setState({ checks: data })
                }
            )
            .catch(
                err => console.log(err)
            )
    }

    getImage = async (id) => {
        await this.apiGetImage(id)
            .then(
                ({ data }) => {
                    const photoData = this._imageEncode(data.data.data, data.contentType);
                    return photoData
                    // this.setState({ photo: photoData })
                }
            )
            .catch(
                err => console.log(err)
            )
    }

    render() {
        console.log('render');

        const { title = 'First Screen', style, color, data: Data } = this.props
        const { photo, checks, isLoadingComplete } = this.state

        return (
            <Container
                color={color}
                style={style}
            >

                {/* <DrggableList/> */}
                {Data ? <Data checks={checks} getCheck={this.getCheck.bind(this)} getImage={this.getImage.bind(this)} />
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

    apiGetImage = (id = '5d812cb81d7189072614d66e') => {
        // const id = '5d812cb81d7189072614d66e'
        const basicAuth = 'Basic ' + btoa(name + ':' + password);
        const request = axios.create({
            headers: {
                "Authorization": basicAuth
            }
        });
        return request.get(`${host}:${port}/images/${id}`);
    }

    apiGetCheck = () => {
        const basicAuth = 'Basic ' + btoa(name + ':' + password);
        const request = axios.create({
            headers: {
                "Authorization": basicAuth
            }
        });
        return request.get(`${host}:${port}/check`);
    }

    _imageEncode(arrayBuffer, contentType) {
        let u8 = new Uint8Array(arrayBuffer)
        let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer), function (p, c) { return p + String.fromCharCode(c) }, ''))
        let mimetype = contentType || "image/png"
        return "data:" + mimetype + ";base64," + b64encoded
    }
}





export default Screen;