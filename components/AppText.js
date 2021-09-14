import React from 'react';
import {Text} from 'react-native';
import defaultStyles from '../config/styles';

//<Heading> My heading component </Heading>

// This is a custom component
function AppText({children, style}) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
