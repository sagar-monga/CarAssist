import { StyleConfig } from '@utils/Constants';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

// TODO: Add floating style to it.
const TextInputWithLabel = ({ style, ...rest }: TextInputProps) => {
  return (
    <TextInput
      style={[styles.textInput, style]}
      placeholderTextColor={StyleConfig.colors.primary}
      {...rest}
    />
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  textInput: {
    borderColor: StyleConfig.colors.secondary,
    borderWidth: 2, 
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
