/**
 * @format
 */

import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from "./src/SplashScreen";
import SelectCity from "./src/SelectCity";

const MainNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    SelectCity: { screen: SelectCity }
  },
  {
    initialRouteName: "SplashScreen"
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer
