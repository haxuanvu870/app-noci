/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://m.noci88.com'}}
        onError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.error('WebView error: ', nativeEvent);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
