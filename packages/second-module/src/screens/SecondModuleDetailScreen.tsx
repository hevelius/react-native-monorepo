import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../actions';
import type { GlobalState } from 'shared';

const SecondModuleDetailScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: GlobalState) => state.secondModule.data);
  return (
    <SafeAreaView>
      <View>
        <Text>{'Second Module Details'}</Text>
        <Text>{data}</Text>
        <Button
          title="Set Data"
          onPress={() => dispatch(actions.setData('New data Second Module'))}
        />
      </View>
    </SafeAreaView>
  );
};

export default SecondModuleDetailScreen;
