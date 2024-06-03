import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { FirstModuleNavigator } from 'first-module';
import store from 'shared';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <FirstModuleNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
