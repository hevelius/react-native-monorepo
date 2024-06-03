import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstModuleHomeScreen from '../screens/FisrtModuleHomeScreen';
import FirstModuleDetailScreen from '../screens/FirstModuleDetailScreen';

const Stack = createStackNavigator();

export const FirstModuleNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="FM_HOME" component={FirstModuleHomeScreen} />
    <Stack.Screen name="FM_DETAIL" component={FirstModuleDetailScreen} />
  </Stack.Navigator>
);
