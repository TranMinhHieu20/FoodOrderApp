import React, { useContext } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { CartContext } from '../context/CartContext'

const CartScreen = ({ navigation }) => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext)

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  const handleNavigateHome = () => {
    clearCart()
    navigation.navigate('Home')
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price} đ</Text>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          <Text style={styles.remove}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList data={cartItems} keyExtractor={(item) => item.id} renderItem={renderItem} />
      <View style={styles.footer}>
        <Text style={styles.total}>Tổng: {total} đ</Text>
        <TouchableOpacity style={styles.button} onPress={handleNavigateHome}>
          <Text style={styles.buttonText}>Thanh toán (COD)</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, marginTop: 50 },
  item: { flexDirection: 'row', marginBottom: 16 },
  image: { width: 80, height: 80, borderRadius: 10 },
  details: { flex: 1, marginLeft: 12 },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { marginVertical: 4, color: '#888' },
  remove: { color: 'red' },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 16
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  },
  button: {
    backgroundColor: '#2f95dc',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})
