import ParentView from '@components/ParentView';
import TextButton from '@components/TextButton';
import TextInputWithLabel from '@components/TextInputWithLabel';
import { useAddCarForm } from '@navigation/hooks/useAddCarForm';
import { useGlobalStore } from '@state/store';
import { StyleConfig } from '@utils/Constants';
import React from 'react';
import { StyleSheet } from 'react-native';

const AddCarScreen = () => {
  const { addCar } = useGlobalStore();
  const { onSubmitMake, onSubmitModel, onSubmitYear, make, model, year } =
    useAddCarForm();

  return (
    <ParentView>
      <TextInputWithLabel placeholder="Make" onChangeText={onSubmitMake} />
      <TextInputWithLabel placeholder="Model" onChangeText={onSubmitModel} />
      <TextInputWithLabel
        placeholder="Year"
        keyboardType="decimal-pad"
        onChangeText={onSubmitYear}
      />
      <TextButton
        title={'Add Car'}
        onPress={() => addCar(make, model, year)}
        disabled={
          make === '' || model === '' || year === 0 || typeof year === 'string'
        }
        disabledButtonStyle={{
          backgroundColor: StyleConfig.colors.tertiary,
        }}
        buttonStyle={{ alignSelf: 'center' }}
      />
    </ParentView>
  );
};

export default AddCarScreen;

const styles = StyleSheet.create({});
