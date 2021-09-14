import React from 'react';
import {Platform, TextInput, View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/styles';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
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
});

export default AppTextInput;
