import React from 'react';
import Login from '../components/Login.js';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const handleLogin = (name, email) => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.fullpage}>
      <View style={styles.container}>
        <Text style={styles.title}>Jobizz</Text>
        <Text style={styles.welcome}>Welcome Back 👋</Text>
        <Text style={styles.lets}>Let's log in. Apply to jobs!</Text>
      </View>
      <View>
        <Login onPress={handleLogin} />
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or continue with</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.iconBackground}>
            <AntDesign name="apple1" size={28} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.iconBackground}>
            <Image source={require('../assets/images/google.png')} style={styles.iconImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.iconBackground}>
            <Image source={require('../assets/images/facebook.png')} style={styles.facebookiconImage} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Haven't an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullpage: {
    marginTop:50,
  },
  container: {
    justifyContent: 'top',
    alignItems: 'left',
    padding: 16,
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#356899',
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 8,
  },
  lets: {
    fontSize: 14,
    fontWeight: '400',
    color: 'grey',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginTop:70,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#555',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,

  },
  socialButton: {
    marginHorizontal: 10,
    
  },

  iconBackground: {
    backgroundColor: 'white',
    width: 56,
    height: 56,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  iconImage: {
    width: 28,
    height: 28,
  },

  facebookiconImage:{
    width: 35,
    height: 40,
    
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  registerText: {
    fontSize: 14,
    color: '#555',
  },
  registerLink: {
    fontSize: 14,
    color: '#356899',
    fontWeight: '600',
  },
});

export default LoginScreen;
