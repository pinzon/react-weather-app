/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Icon,
  ScrollView
} from "react-native";
import { ACCUWEATHER_KEY_API } from "react-native-dotenv";
import AsyncStorage from "@react-native-community/async-storage";
// import { isArray } from 'util';

// import console from 'console'

export default class SelectCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      cities: [],
      cityList: ""
      // controller: new AbortController()
    };
  }

  static navigationOptions = {
    title: "Select a city",
    headerLeft: null
  };

  textChanged(text) {
    this.setState({ text });
    if (text.length) {
      this.getCitiesFromApi(text);
    } else {
      this.setState({ cities: [] });
    }
  }

  citySelected(city) {
    console.log(city);
  }

  renderCities() {
    this.cityList = this.state.cities.map(city => (
      <Text
        onPress={() => this.citySelected(city)}
        style={styles.listItem}
        key={city.Key}
      >
        {city.LocalizedName}, {city.Country.LocalizedName}
      </Text>
    ));
    // console.log(this.cities)
  }

  getCitiesFromApi(text) {
    fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${ACCUWEATHER_KEY_API}&q=${encodeURI(
        text
      )}&language=en-us`,
      {}
    )
      .then(response => response.json())
      .then(responseJson => {
        // return responseJson;
        if (Array.isArray(responseJson)) {
          this.setState({ cities: responseJson });
          this.renderCities();
        } else {
          this.setState({ cities: [] });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    console.log("Page mounted");
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.textChanged(text)}
          value={this.state.text}
          placeholder="Select a city..."
        />
        <ScrollView style={styles.list}>{this.cityList}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  textInput: {
    borderColor: "#edeeef",
    borderWidth: 0.4,
    alignSelf: "stretch",
    marginTop: 5,
    fontSize: 20,
    height: 50
  },
  list: {
    alignSelf: "stretch"
  },
  listItem: {
    fontSize: 20,
    marginTop: 10
  }
});
