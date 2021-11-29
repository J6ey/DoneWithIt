import React, {useState} from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  Switch,
} from 'react-native';
import AppText from './components/AppText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from './components/Icon';
import AppButton from './components/AppButton';
import Card from './components/Card';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import MessagesScreen from './screens/MessagesScreen';
import Screen from './components/Screen';
import AppTextInput from './components/AppTextInput';
import {Picker} from '@react-native-picker/picker';
import AppPicker from './components/AppPicker';
import LoginScreen from './screens/LoginScreen';
import ListingEditScreen from './screens/ListingEditScreen';

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Cameras', value: 3},
];

export default function App() {
  // return <ListingEditScreen />;

  // Custom AppPicker
  const [category, setCategory] = useState(categories[0]);
  return (
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={item => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput icon="email" placeholder="Email" />
    // </Screen>
    <ListingEditScreen />
  );
}
