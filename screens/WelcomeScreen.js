import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Text style={{marginTop: 20}}>See What You Don't Need</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.loginButton} />
        <View style={styles.registerButton} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center', // cross axis
    paddingTop: 50,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'dodgerblue',
  },
  logo: {
    width: 100,
    height: 100,
  },
  container: {
    backgroundColor: '#fff',
  },
});

export default WelcomeScreen;
