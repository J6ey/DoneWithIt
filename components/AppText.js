import React from 'react';
import {Text, StyleSheet} from 'react-native';

//<Heading> My heading component </Heading>

// This is a custom component
function AppText({children}) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 19,
    fontFamily: 'Roboto',
  },
});
export default AppText;
