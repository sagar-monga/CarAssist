import { StyleConfig } from '@utils/Constants';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type TextButtonProps = {
  title?: string;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  onPress?: () => void;
};

const TextButton = ({
  title = 'Default',
  buttonStyle,
  titleStyle,
  onPress,
}: TextButtonProps) => {
  return (
    <Pressable style={[styles.defaultButton, buttonStyle]} onPress={onPress}>
      <Text style={[styles.defaultTitle, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  defaultButton: {
    backgroundColor: StyleConfig.colors.primary,
    alignSelf: 'flex-start',
    padding: 15,
    borderRadius: StyleConfig.button.RADIUS,
  },
  defaultTitle: {
    color: StyleConfig.colors.light,
  },
});
