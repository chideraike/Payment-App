import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import MainApp from './MainApp'
import Login from './screens/Login';

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <DismissKeyboard>
        {loggedIn ? <MainApp /> : (
          <ScrollView
            style={styles.container}
            bounces={false}
            showsVerticalScrollIndicator={false}
          >
            <SafeAreaView>
              <StatusBar style="auto" />
              <Login
                onClick={() => setLoggedIn(true)}
              />
            </SafeAreaView>
          </ScrollView>
        )}
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
