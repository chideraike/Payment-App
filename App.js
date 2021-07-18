import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import Login from './screens/Login';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <DismissKeyboard>
        <ScrollView style={styles.container}>
          <SafeAreaView>
            <Login />
            <StatusBar style="auto" />
          </SafeAreaView>
        </ScrollView>
      </DismissKeyboard>
    );
  }
}

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f0fb',
  },
});
