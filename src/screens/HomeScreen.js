import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { PRODUCTS } from '../data/dummyProducts'

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price} đ</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Danh sách món ăn</Text>
      <FlatList data={PRODUCTS} keyExtractor={(item) => item.id} renderItem={renderItem} numColumns={2} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  card: {
    flex: 1,
    margin: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 120
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8
  },
  price: {
    marginBottom: 8,
    color: '#888'
  }
})
