import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NameInput = (props) => {
  const [name, setName] = useState('');

  const onSendName = () => {
    props.onButtonPress(name);
    setName('');
  }

  return ( 
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
          onPress={() => onSendName()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
})

export default NameInput;