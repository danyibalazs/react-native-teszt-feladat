import React, { useState } from 'react';
import { 
  StyleSheet, 
  Image, 
  Text, 
  View, 
  TextInput, 
  Button 
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [showedName, setShowedName] = useState('');

  const onButtonPress = () => {
    if (name) {
      setShowedName(name);
      setName('');
    }  
  }

  return (
    <View style={styles.mainContainer}>
      <Image 
        style={styles.image} 
        source={require('./assets/logo.png')} 
        resizeMode='contain'
      /> 
      <View>
        <Text style={styles.welcomeText}>
          Üdv, {showedName}!
        </Text>
      </View> 
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input} 
          placeholder="Név" 
          value={name}
          onChangeText={(enteredText) => setName(enteredText)}
        />
        <View style={styles.buttonContainer}>  
          <Button
            title="Küldés"
            color="#3797f1"
            onPress={onButtonPress}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    padding: 30
  },
  image: {
    width: '100%'
  },
  welcomeText: {
    fontSize: 20,
    marginVertical: 30
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    flex: 4,
    paddingHorizontal: 10,
    backgroundColor: '#fbfbfb',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 15
  },
  buttonContainer: {
    flex: 2,
    marginLeft: 10
  }
});
