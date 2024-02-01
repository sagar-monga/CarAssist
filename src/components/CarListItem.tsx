import { StyleConfig } from '@utils/Constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Props = {
  car: Car;
};

const CarListItem = ({ car }: Props) => {
  return (
    <View style={styles.parent}>
      <Text>{`${car.make} ${car.model} ${car.year}`}</Text>
      <Icon name="chevron-right" />
    </View>
  );
};

export default CarListItem;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: StyleConfig.colors.light,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
