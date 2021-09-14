import React from 'react';
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

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  // const [isNew, setIsNew] = useState(false);

  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
      <Picker.Item label="JAVA" value="java" />
      <Picker.Item label="JS" value="javascript" />
    </Picker>
  );
}
