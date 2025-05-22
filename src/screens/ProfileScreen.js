import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ProfileScreen = ({ navigation }) => {
  const user = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0912 345 678',
    address: '123 Đường Lê Lợi, Hà Nội',
    avatar: 'https://i.pravatar.cc/300'
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Thông tin cá nhân</Text>
        <View style={styles.infoRow}>
          <Ionicons name="call-outline" size={20} color="#333" />
          <Text style={styles.infoText}>{user.phone}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="home-outline" size={20} color="#333" />
          <Text style={styles.infoText}>{user.address}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Đơn hàng</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Tổng đơn</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>9</Text>
            <Text style={styles.statLabel}>Đã giao</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Đang chờ</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hành động</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="key-outline" size={18} color="#2f95dc" />
          <Text style={styles.actionText}>Đổi mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="pencil-outline" size={18} color="#2f95dc" />
          <Text style={styles.actionText}>Cập nhật thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.logoutButton]}
          onPress={() => {
            navigation.navigate('Login')
          }}
        >
          <Ionicons name="log-out-outline" size={18} color="#dc3545" />
          <Text style={[styles.actionText, { color: '#dc3545' }]}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    marginTop: 50
  },
  header: {
    alignItems: 'center',
    marginVertical: 24
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 14,
    color: '#777'
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 2
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333'
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  infoText: {
    marginLeft: 8,
    fontSize: 15,
    color: '#555'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  statBox: {
    alignItems: 'center',
    flex: 1
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2f95dc'
  },
  statLabel: {
    fontSize: 13,
    color: '#777'
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  logoutButton: {
    borderTopWidth: 1,
    borderColor: '#eee',
    marginTop: 10
  },
  actionText: {
    fontSize: 15,
    marginLeft: 10,
    color: '#2f95dc'
  }
})
