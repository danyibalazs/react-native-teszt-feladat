import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
  return ( 
    <Image 
        style={styles.image} 
        source={require('../assets/logo.png')} 
        resizeMode='contain'
    /> 
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%'
  }
})

export default Logo;