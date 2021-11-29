import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from './Icon';
import AppText from './AppText';

// PickterItem
function CategoryPickerItem({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    flex: 1 / 3,
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CategoryPickerItem;
