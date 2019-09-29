import React from 'react';
import { AppLoading, Image } from 'react-native'
import styled from 'styled-components';
import api from '../api';

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
        await api.apiGetCheck()
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

    changeStateCheck = (newState) => {
        this.setState({ checks: newState })
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
                {Data ? <Data checks={checks} getCheck={this.getCheck.bind(this)} changeStateCheck={this.changeStateCheck.bind(this)} />
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
}





export default Screen;