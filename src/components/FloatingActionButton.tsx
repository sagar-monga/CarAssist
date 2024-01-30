import React from 'react';
import { StyleSheet } from 'react-native';
import TextButton, { TextButtonProps } from './TextButton';

const FloatingActionButton = (props: TextButtonProps) => {
  return <TextButton {...props} buttonStyle={styles.button} />;
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});
