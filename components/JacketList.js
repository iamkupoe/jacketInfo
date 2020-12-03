import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Entypo, EvilIcons } from '@expo/vector-icons'; 

export default function JacketList({name, price, icon, photo}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={photo}/>

            <View style={styles.profileDetails}>
              <Text style={styles.productName}>{name}</Text>
               <Text>{icon}</Text>
              <Text style={styles.price}>{price}</Text>
            
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
     flexDirection:"row",
     alignItems:"center",
     marginBottom:10,
     height:100,
     marginLeft:0

   },

   image:{
     width:120,
     height:100,
     borderRadius:20,
   
   },
   productName: {
    color: "#4e15ab",
    fontSize: 12,
    fontWeight: "bold",
    
  },

  profileDetails: {
    justifyContent: "center",
    height: 5,
    width: 180,
    paddingLeft: 15,
  
    
  },

  price: {
    color: "blue",
    fontSize: 13,
    fontWeight:"bold",
    flexDirection:"row",
  },


});