import React from 'react';
import { StyleSheet, Text } from 'react-native';
import ParentView from './ParentView';
import { useGlobalStore } from '@state/store';

const HomeScreen = () => {
  const {cars, addCar} = useGlobalStore();
  console.log(cars);

  return (
    <ParentView>
      <Text
        onPress={() => {
          addCar('Audi', 'e-tron', 2020);
        }}>
        CarAssist
      </Text>
    </ParentView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
