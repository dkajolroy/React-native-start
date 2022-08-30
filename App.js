import { View, Text, StatusBar, StyleSheet, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [value, setValue] = useState(2)
  
  return (
    <View style={style.view}>
      <StatusBar backgroundColor="green" />
      <View style={style.box}>
        <Button onPress={() => setValue(x=>x-2)} title='Incre' />
        <Text style={style.value}>{value}</Text>
        <Button onPress={() => setValue(x=>x+2)} title='Decre' />
      </View>
        <TextInput keyboardType='numeric' onChangeText={(e)=>setValue(e)} style={style.input} placeholder='Enter a value' />
    </View >
  )
}

const style = StyleSheet.create({

  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "green"
  },
  box: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    backgroundColor: "#fff"
  },
  value:{
    fontSize: 22,
    marginHorizontal: 10,
  },
  input:{
    backgroundColor: "#fff",
    borderRadius:10,
    width:300,
    fontSize: 20,
    marginTop: 10,
  }


})