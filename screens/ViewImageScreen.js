import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftBox}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.rightBox}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>

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
    margin: 20,
  },
  rightBox: {
    margin: 20,
    right: 0,
    alignItems: 'flex-end',
    position: 'absolute',
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
