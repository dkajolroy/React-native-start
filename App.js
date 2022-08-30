import { View, Text, StatusBar, StyleSheet, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [value, setValue] = useState([
    { name: "Samsung", price: 22 },
    { name: "Realme", price: 33 },
    { name: "Vivo", price: 23 },
    { name: "Oppo", price: 32 },
    { name: "Xiaomi", price: 44 },
    { name: "Samphony", price: 39 },
    { name: "Walton", price: 36 },
    { name: "Iphone", price: 42 },
    { name: "Itel", price: 11 }
  ])

  return (
    <View >
      <Text style={style.header}>E-commerce Product</Text>
      <View style={style.flexBox}>
        {
          value.map((x, i) => (
            <View style={style.productFlex} key={i}>
              <View style={style.product}>
              <Text style={style.productName}>{x.name}</Text>
              <Text style={style.productPrice}>Price: ${x.price}</Text>
            </View>
            </View>
          )
          )
        }
      </View>
    </View >
  )
}

const style = StyleSheet.create({
 
  header: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black'
  },
  flexBox:{
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  productFlex:{
    width: "33.33%",
    
  },
  product:{
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  productName:{
    color: "black",
  },
  productPrice:{
    color: "black",
  }

})