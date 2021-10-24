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
import AppPicker from './components/AppPicker';

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  // const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
