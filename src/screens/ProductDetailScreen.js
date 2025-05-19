import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { CartContext } from '../context/CartContext'

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(product)
    navigation.navigate('Cart')
  }

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price} đ</Text>
      <Text style={styles.description}>{product.description}</Text>

      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10
  },
  price: {
    fontSize: 18,
    color: '#555'
  },
  description: {
    fontSize: 16,
    marginVertical: 10
  },
  button: {
    marginTop: 20,
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
