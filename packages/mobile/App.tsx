import React from 'react';

import store from 'shared';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {FirstModuleNavigator} from 'first-module';
import {SecondModuleNavigator} from 'second-module';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Tab.Screen name="First Module" component={FirstModuleNavigator} />
            <Tab.Screen
              name="Second Module"
              component={SecondModuleNavigator}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
