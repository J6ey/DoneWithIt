import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import {View, Text, Platform, StyleSheet} from 'react-native';
import AppText from './components/AppText';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppButton from './components/AppButton';
import Card from './components/Card';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import MessagesScreen from './screens/MessagesScreen';

export default function App() {
  return <MessagesScreen />;
}
