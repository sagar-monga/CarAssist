import HomeScreen from '@screens/HomeScreen';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.rootcontainer}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
  },
});

export default App;
