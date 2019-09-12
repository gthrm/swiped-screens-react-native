import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import { width, height } from './constatnts/Layout';
import Colors from './constatnts/Colors';
import Header from './components/Header';
import Screen from './components/Screen';
import DrggableList from './components/DrggableList';

export default function App() {
  //scrollEnabled?
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
        <Screen title='First screen' color={'yellow'} data={DrggableList}/>
        <Screen title='First screen' color={'blue'} />
      </ScrollView>
    </View>
  );
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
