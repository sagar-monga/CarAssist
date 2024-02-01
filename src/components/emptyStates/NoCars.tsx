import ParentView from '@components/ParentView';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const NoCars = () => {
  return (
    <ParentView style={styles.root}>
      <Text style={styles.message}>No Cars added</Text>
    </ParentView>
  );
};

export default NoCars;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 28,
  },
});
