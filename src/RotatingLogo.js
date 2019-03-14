import React from 'react';
//import react in our project

import { Animated, Image, Easing } from 'react-native';
////import all the components we needed

export default class RotatingLogo extends React.Component {
  constructor() {
    super();
    this.RotateValueHolder = new Animated.Value(0);
  }

  componentDidMount() {
    this.StartImageRotateFunction();
  }

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);

    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start(() => this.StartImageRotateFunction());
  }
  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
        <Animated.Image
        style={{
          transform: [{ rotate: RotateData }],
        }}
        source={require('../assets/icons8-satelite-luna-64.png')}
      />
    );
  }
}
