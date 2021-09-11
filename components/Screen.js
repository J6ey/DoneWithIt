import React from 'react';
import {StyleSheet, StatusBar, Platform, SafeAreaView} from 'react-native';

function Screen({children}) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
