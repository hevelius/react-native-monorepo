import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SecondModuleNavigator } from 'second-module';
import store from 'shared';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <SecondModuleNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
