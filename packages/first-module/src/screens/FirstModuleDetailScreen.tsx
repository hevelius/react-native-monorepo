import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../actions';
import type { GlobalState } from 'shared';

const FirstModuleDetailScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: GlobalState) => state.firstModule.data);
  return (
    <SafeAreaView>
      <View>
        <Text>{'First Module Details'}</Text>
        <Text>{data}</Text>
        <Button
          title="Set Data"
          onPress={() => dispatch(actions.setData('New data First Module'))}
        />
      </View>
    </SafeAreaView>
  );
};

export default FirstModuleDetailScreen;
