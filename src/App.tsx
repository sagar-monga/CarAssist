import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): React.JSX.Element {
  return <SafeAreaView style={styles.rootcontainer}>
    <Text>CarAssist</Text>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  rootcontainer: {flex: 1},
});

export default App;
