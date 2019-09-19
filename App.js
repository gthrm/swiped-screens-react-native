import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Asset } from 'expo-asset';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Feather } from '@expo/vector-icons';

import { width, height } from './constatnts/Layout';
import Colors from './constatnts/Colors';
import Header from './components/Header';
import Screen from './components/Screen';
import DrggableList from './components/DrggableList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: 'тут старый стейт',
      isLoadingComplete: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ testData: 'тут новый стейт' })
    }, 5000);

  }
  render() {
    const { testData, isLoadingComplete } = this.state

    if (!isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={() => this.handleFinishLoading()}
        />
      );
    }
    return (
      <View
        style={{ flex: 1 }}
      >
        <Header />
        <ScrollView
          contentContainerStyle={styles.container}
          horizontal
          pagingEnabled
        >
          <Screen testProps={testData} title='First screen' data={DrggableList} />
          <Screen title='First screen' color={'blue'} />
        </ScrollView>
      </View>
    );
  }
  //scrollEnabled?
  async loadResourcesAsync () {
    await Promise.all([
      Asset.loadAsync([
        require('./assets/splash.png')
      ]),
      Font.loadAsync({
        ...Feather.font,
        'sf-ui-display-black': require('./ComponentsLib/assets/fonts/sf-ui-display-black-58646a6b80d5a.otf'),
        'sf-ui-display-bold': require('./ComponentsLib/assets/fonts/sf-ui-display-bold-58646a511e3d9.otf'),
        'sf-ui-display-heavy': require('./ComponentsLib/assets/fonts/sf-ui-display-heavy-586470160b9e5.otf'),
        'sf-ui-display-light': require('./ComponentsLib/assets/fonts/sf-ui-display-light-58646b33e0551.otf'),
        'sf-ui-display-medium': require('./ComponentsLib/assets/fonts/sf-ui-display-medium-58646be638f96.otf'),
        'sf-ui-display-semibold': require('./ComponentsLib/assets/fonts/sf-ui-display-semibold-58646eddcae92.otf'),
        'sf-ui-display-thin': require('./ComponentsLib/assets/fonts/sf-ui-display-thin-58646e9b26e8b.otf'),
        'sf-ui-display-ultralight': require('./ComponentsLib/assets/fonts/sf-ui-display-ultralight-58646b19bf205.otf'),
      }),
    ]);
  }

  handleLoadingError = (error) => {
    console.warn(error);
  }

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    width,
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screen: {
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App
