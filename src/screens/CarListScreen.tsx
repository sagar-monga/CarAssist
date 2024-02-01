import CarListItem from '@components/CarListItem';
import FloatingActionButton from '@components/FloatingActionButton';
import List, { ListType } from '@components/List';
import ParentView from '@components/ParentView';
import NoCars from '@components/emptyStates/NoCars';
import { useAuthNavigation } from '@navigation/hooks/useAuthNavigation';
import { AppRoutes } from '@navigation/types/AppRoutes';
import { useGlobalStore } from '@state/store';
import React from 'react';
import { StyleSheet } from 'react-native';

const CarListScreen = () => {
  const { goTo } = useAuthNavigation();
  const { cars } = useGlobalStore();

  const renderListItem = ({ item }: ListType<Car>) => {
    return <CarListItem car={item} />;
  };

  return (
    <ParentView>
      {cars.length > 0 ? (
        <List data={cars} renderItem={renderListItem} />
      ) : (
        <NoCars />
      )}
      <FloatingActionButton
        title="Add New Car"
        onPress={() => {
          goTo(AppRoutes.AddCar);
        }}
      />
    </ParentView>
  );
};

export default CarListScreen;

const styles = StyleSheet.create({});
