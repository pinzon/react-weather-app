/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';

export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    setTimeout(async () => {
      this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Weather' })],
      }));
    }, 500);
  }

  render() {
    // const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.name}>React Weather App</Text>
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        {/* <RotatingLogo style={styles.logo} /> */}
        <Image source={require('../assets/icon_apixu.png')}></Image>
        <Text style={styles.slogan}>Growth through passion and discipline</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "column",
    // justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  name: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 100
  },
  logo: {
    marginTop: 50
  },
  slogan: {
    textAlign: "center",
    color: "#333333",
    marginTop: 350
  }
});
