import React from 'react';
import { Text, StyleSheet } from 'react-native';

const WelcomeText = (props) => {
  return ( 
    <Text style={styles.welcomeText}>
      Üdv, {props.showedName}!
    </Text>
  )
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 20,
    marginVertical: 30
  }
})

export default WelcomeText;