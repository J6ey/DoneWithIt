import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import {View, Text, Platform, StyleSheet} from 'react-native';
import AppText from './components/AppText';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from './components/AppButton';
import Card from './components/Card';

export default function App() {
  let x = 1;
  console.log('app executed...');
  return (
    <View
      style={{
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
      }}>
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require('./assets/jacket.jpg')}
      />
    </View>
  );
}
