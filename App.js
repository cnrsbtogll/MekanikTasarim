import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <WebView
          source={{
            uri: 'www.mekaniktasarim.org',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '100%',
    height: '100%',
  },
});

export default App;
