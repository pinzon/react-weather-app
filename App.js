/**
 * @format
 */

import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from "./src/SplashScreen";
import SelectCity from "./src/SelectCity";
import WeatherScreen from './src/WeatherPage';

const MainNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    SelectCity: { screen: SelectCity },
    Weather: {screen: WeatherScreen}
  },
  {
    initialRouteName: "SplashScreen"
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer
