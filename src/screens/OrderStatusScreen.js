import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const OrderStatusScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trạng thái đơn hàng</Text>
      <Text>- Đơn hàng đã được đặt.</Text>
      <Text>- Đang giao đến bạn.</Text>
      <Text>- Cảm ơn bạn đã ủng hộ!</Text>
    </View>
  )
}

export default OrderStatusScreen

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 }
})
