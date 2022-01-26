/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App (){

  const [username, setUsername] = useState('');

  const handleButtonSave = async () => {
    await AsyncStorage.setItem('user', username);
    
  }

  const handleButtonShow = async () => {
    const show = await AsyncStorage.getItem('user');

    if(show != null) {
      setUsername(show);
    }
    Alert.alert('Seja bem vindo', show);
  }

  const handleButtonEraser = () => {
    setUsername('');
    console.warn("Limpo: "+ username);

  }

  


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>{ username ? "Seja bem vindo " + username : '' }</Text>

      <View style={styles.containerButton}>
        <TextInput 
            placeholder='Digite aqui'
            onChangeText={setUsername}
            style={styles.input}
        />

        <Button 
          title='Salvar AsyncStorage'
          onPress={handleButtonSave}
          style={styles.button}
          color='#000'
        />

        <Button 
          title='Mostrar'
          onPress={handleButtonShow}
          style={styles.button}
          color='#000'
        />
        <Button 
          title='Excluir AsynStorage'
          onPress={handleButtonEraser}
          color='#000'
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  input: {
    fontSize: 20,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 26,
    justifyContent: 'flex-end'
  },
  containerButton: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    padding: 5,
    
  },
  button: {
    margin: 5,
  }
});