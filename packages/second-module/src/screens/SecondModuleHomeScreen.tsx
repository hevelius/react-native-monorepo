import React from 'react';
import { View, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { SECOND_MODULE_ROUTES } from '../navigation/routes';
import type { FirstModuleParamsList } from '../navigation/params';

const SecondModuleHomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<FirstModuleParamsList>>();
  return (
    <SafeAreaView>
      <View>
        <Button
          title="Got To Detail Screen"
          onPress={() => navigation.navigate(SECOND_MODULE_ROUTES.DETAIL)}
        />
      </View>
    </SafeAreaView>
  );
};

export default SecondModuleHomeScreen;
