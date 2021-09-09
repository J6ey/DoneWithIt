import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Text style={styles.tagline}>See What You Don't Need</Text>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" color="secondary" />
        <AppButton title="Register" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
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
    padding: 10,
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
