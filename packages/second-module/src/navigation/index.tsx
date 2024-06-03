import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SecondModuleHomeScreen from '../screens/SecondModuleHomeScreen';
import SecondModuleDetailScreen from '../screens/SecondModuleDetailScreen';

const Stack = createStackNavigator();

export const SecondModuleNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SM_HOME" component={SecondModuleHomeScreen} />
    <Stack.Screen name="SM_DETAIL" component={SecondModuleDetailScreen} />
  </Stack.Navigator>
);
