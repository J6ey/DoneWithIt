import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import {View, Text, Platform, StyleSheet} from 'react-native';
import AppText from './components/AppText';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from './components/AppButton';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AppButton
        title="Login"
        onPress={() => console.log('tapped..fsdf.')}></AppButton>
    </View>
  );
}
