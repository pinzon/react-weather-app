/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import RotatingLogo from "./RotatingLogo";
import { StackActions, NavigationActions } from 'react-navigation';

export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    setTimeout(async () => {
      try {
        const cityKey = await AsyncStorage.getItem("cityKey");
        if (cityKey !== null) {
          // We have data!!
          console.log(value);
        } else {
          console.log("No data, navigating to select city page");
          // this.props.navigation.navigate("SelectCity");
          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'SelectCity' })],
          }));
        }
      } catch (error) {
        // Error retrieving data
      }
    }, 500);
  }

  render() {
    // const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.name}>React Weather App</Text>
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        <RotatingLogo style={styles.logo} />
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
    marginTop: 300
  }
});
