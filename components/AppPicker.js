import {placeholder} from '@babel/types';
import React, {useState} from 'react';
import {
  Platform,
  TextInput,
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/styles';
import AppText from './AppText';

function AppPicker({icon, placeholder, ...otherProps}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name={'chevron-down'}
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    marginVertical: 10,
  },
});

export default AppPicker;
