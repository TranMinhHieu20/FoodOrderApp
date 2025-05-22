import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OnboardingScreen from '../screens/OnboardingScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import CartScreen from '../screens/CartScreen'
import NotificationScreen from '../screens/NotificationScreen'
import OrderStatusScreen from '../screens/OrderStatusScreen'
import MainTabs from '../screens/MainTabs'

const Stack = createNativeStackNavigator()

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Notification" component={NotificationScreen} />
    <Stack.Screen name="OrderStatus" component={OrderStatusScreen} />
    <Stack.Screen name="MainTabs" component={MainTabs} />
  </Stack.Navigator>
)

export default AppNavigator
