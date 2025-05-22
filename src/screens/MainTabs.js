import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import NotificationScreen from '../screens/NotificationScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator()

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName
        switch (route.name) {
          case 'Home':
            iconName = 'home-outline'
            break
          case 'Cart':
            iconName = 'cart-outline'
            break
          case 'Notifications':
            iconName = 'notifications-outline'
            break
          case 'Profile':
            iconName = 'person-outline'
            break
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: '#2f95dc',
      tabBarInactiveTintColor: 'gray',
      headerShown: false
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="Notifications" component={NotificationScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
)

export default MainTabs
