import ParentView from '@components/ParentView';
import TextButton from '@components/TextButton';
import { useGlobalStore } from '@state/store';
import React from 'react';
import { StyleSheet } from 'react-native';

const AddCarScreen = () => {
  const { cars, addCar } = useGlobalStore();

  return (
    <ParentView>
      <TextButton
        title={'Add Car'}
        onPress={() => addCar('Audi', 'e-tron', 2020)}
        buttonStyle={{ alignSelf: 'center' }}
      />
    </ParentView>
  );
};

export default AddCarScreen;

const styles = StyleSheet.create({});
