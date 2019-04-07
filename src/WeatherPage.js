import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class WeatherPage extends Component {
  static navigationOptions = {
    title: 'React Weather App'
  };

  constructor(props) {
    super(props);
    this.state = {
      location: {},
      cities: [],
      cityList: ""
    };
  }

  render() {
    return (
      <View>
        <Text>React Weather App</Text>
      </View>
    );
  }
}
