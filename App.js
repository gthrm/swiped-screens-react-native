import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import { width, height } from './constatnts/Layout';
import Colors from './constatnts/Colors';

export default function App() {
  //scrollEnabled?
  return (
    <View
      style={{ flex: 1 }}
    >
      <View
        style={styles.header}>
        <Text>Header</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.container}
        horizontal
        pagingEnabled
      >
        <View style={[styles.screen, { backgroundColor: 'green' }]}>
          <Text>First screen</Text>
        </View>
        <View style={[styles.screen, { backgroundColor: 'blue' }]}>
          <Text>Second screen</Text>
        </View>

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
