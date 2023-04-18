import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Player2} from './src/components/VideoControl';

const App = () => {
  return (
    <View style={styles.container}>
      <Player2 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'blue',
  },
});

export default App;
