import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

function Header() {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.isFavoriteReducer);

  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={styles.button}
      >
        <View style={styles.itemCountContainer}>
          <Text style={styles.itemCountText}>{cartItems.length}</Text>
        </View>
        <Ionicons name='ios-cart' size={35} color='#101010' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 20
  },
  button: {
    marginTop: 10,
    alignItems: 'flex-end',
    marginRight: 10
  },
  itemCountContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default Header;