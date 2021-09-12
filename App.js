import React, {useState} from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import {View, Text, Platform, StyleSheet, TextInput} from 'react-native';
import AppText from './components/AppText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from './components/Icon';
import AppButton from './components/AppButton';
import Card from './components/Card';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import MessagesScreen from './screens/MessagesScreen';
import Screen from './components/Screen';
import AppTextInput from './components/AppTextInput';

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
