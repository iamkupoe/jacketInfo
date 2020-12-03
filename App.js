import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JacketList from './components/JacketList';
import ProductDetails from './ProductDetails';
import StarRating from './components/StarRating';
export default function App() {
  return (
    <View style={styles.container}>
      <ProductDetails/>
{/*<JacketList/>*/}
  {/*<StarRating/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
