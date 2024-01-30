import FloatingActionButton from '@components/FloatingActionButton';
import ParentView from '@components/ParentView';
import { useAuthNavigation } from '@navigation/hooks/useAuthNavigation';
import { AppRoutes } from '@navigation/types/AppRoutes';
import { useGlobalStore } from '@state/store';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const CarListScreen = () => {
  const { goTo } = useAuthNavigation();
  const { cars } = useGlobalStore();

  return (
    <ParentView>
      {cars.length > 0 ? (
        <FlatList
          data={cars}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  backgroundColor: 'red',
                  padding: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>{`${item.make} ${item.model} ${item.year}`}</Text>
                <Text>{`>`}</Text>
              </View>
            );
          }}
        />
      ) : (
        <Text>No Cars added</Text>
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
