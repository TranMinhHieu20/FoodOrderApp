import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông báo</Text>
      <Text>- Đơn hàng của bạn đang được xử lý...</Text>
      <Text>- Cảm ơn bạn đã sử dụng dịch vụ!</Text>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, marginTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 }
})
