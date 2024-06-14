import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Login = ({ onPress }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    onPress(name, email);
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Name" 
        value={name} 
        onChangeText={setName} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    marginRight: 30,
  },
  input: {
    height: 52,
    width: 327,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    height: 56,
    width: 327,
    backgroundColor: '#356899',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
   },
  
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default Login;
