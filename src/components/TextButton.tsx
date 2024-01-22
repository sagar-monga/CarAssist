import { StyleConfig } from '@utils/Constants';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

type TextButtonProps = {
  title: string;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  onPress: () => void;
};

const TextButton = ({ title, buttonStyle, titleStyle }: TextButtonProps) => {
  return (
    <Pressable style={[styles.defaultButton, buttonStyle]}>
      <Text style={[styles.defaultTitle, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  defaultButton: {
    backgroundColor: StyleConfig.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTitle: {
    color: StyleConfig.colors.light,
  },
});
