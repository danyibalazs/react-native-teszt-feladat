import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Logo from './components/Logo';
import WelcomeText from './components/WelcomeText';
import NameInput from './components/NameInput';

export default function App() {
  const [showedName, setShowedName] = useState('');

  const onButtonPress = (name) => {
    if (name) {
      setShowedName(name.trim());
    }  
  }

  return (
    <View style={styles.mainContainer}>
      <Logo />
      <WelcomeText showedName={showedName} />
      <NameInput onButtonPress={onButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    padding: 30
  }
});
