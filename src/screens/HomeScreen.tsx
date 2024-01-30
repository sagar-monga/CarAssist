import ParentView from '@components/ParentView';
import TextButton from '@components/TextButton';
import { useGlobalStore } from '@state/store';
import React from 'react';
import { StyleSheet } from 'react-native';

const HomeScreen = () => {
  const { cars, addCar } = useGlobalStore();

  return (
    <ParentView>
      <TextButton
        title={'Add Car'}
        onPress={() => addCar('Audi', 'e-tron', 2020)}
      />
    </ParentView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
