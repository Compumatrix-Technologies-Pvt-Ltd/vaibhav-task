import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Height_ } from '../Helpers/Dimentions'

const ListEmpty = () => {
  return (
    <View style={{
              
        height:Height_*0.9,
        justifyContent:'center',
       
        alignItems: 'center',
      
    
      }} >
        <Text style={{
          color: 'white',
          fontSize:20,
          fontWeight:'bold'
        }} >No Data Found.</Text>
      </View>
  )
}

export default ListEmpty

const styles = StyleSheet.create({})