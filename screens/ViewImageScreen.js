import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftBox} />
      <View style={styles.rightBox} />

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  leftBox: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
  },
  rightBox: {
    right: 0,
    alignItems: 'flex-end',
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  image: {
    top: 50,
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
