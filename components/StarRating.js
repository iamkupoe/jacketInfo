import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Easing} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const numStars = 5


export default class StarRating extends Component {

    state = {
        rating: 4,
        animation: new Animated.Value(1)
    };

    rate = star => {
        this.setState({ rating: star })
    };

    animate = () => {
        Animated.timing(this.animation, {
            toValue: 2,
            duration: 400,
            easing: Easing.ease,
            useNativeDriver: true
        }).start(() => {
            this.state.animation.setValue(1);
        })
    }

    render() {
        let stars = []

        const animateScale = this.state.animation.interpolate({
            inputRange: [1, 1.5, 2],
            outputRange: [1, 1.4, 1]
        })


        for(let x = 1; x <= numStars; x++) {
             stars.push(
                 <TouchableWithoutFeedback key={x} 
                 onPress={() => {
                     this.rate(x);
                 }}>
                   <Animated.View>
                       <Star filled={x <= this.state.rating ? true : false} />
                   </Animated.View>
                   
                 </TouchableWithoutFeedback>
             );
        }
        return (
            <View style={Styles.container}>
                <View style={{flexDirection:"row"}}>{stars}</View>
            </View>
        )
    }
}

class Star extends Component {

    render() {

        return <FontAwesome name={this.props.filled === true ? "star" : "star-o"} size={12} color="#eb960e" />
    }
}


const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})