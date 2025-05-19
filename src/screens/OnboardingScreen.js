import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const Onboarding = ({ navigation }) => {
  const onLogin = () => {
    navigation.navigate('Login')
  }

  const onRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <ImageBackground source={require('../assets/images/buncha.jpg')} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.text}>Welcome to the FoodOrderApp!</Text>
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onRegister}>
          <Text style={styles.buttonText}>Tạo tài khoản</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)', // tạo lớp mờ để chữ dễ đọc
    padding: 30,
    borderRadius: 12,
    alignItems: 'center'
  },
  text: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#2f95dc',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
    width: 200
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})
