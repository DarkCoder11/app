import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import configureStore from "./src/Store/configureStore";

import TermsScreen from "./src/Screens/TermsScreen/TermsScreen";
import OrderDriverScreen from "./src/Screens/OrderDriverScreen/OrderDriverScreen";
import ReservePlaceScreen from "./src/Screens/ReservePlaceScreen/ReservePlaceScreen";
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import ConfirmCodeScreen from './src/Screens/ConfirmCodeScreen/ConfirmCodeScreen';
import SideDrawer from './src/Screens/SideDrawer/SideDrawer';

const store = configureStore();

//Register Screens

Navigation.registerComponent(
  "smartwash.TermsScreen",
  () => TermsScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "smartwash.OrderDriverScreen",
  () => OrderDriverScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "smartwash.ReservePlaceScreen",
  () => ReservePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "smartwash.RegistrationScreen",
  () => RegistrationScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "smartwash.ConfirmCodeScreen",
  () => ConfirmCodeScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "smartwash.SideDrawer",
  () => SideDrawer,
  store,
  Provider
);

//start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "smartwash.TermsScreen",
    title: "Terms"
  }
});