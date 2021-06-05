import React from "react";
import BottomNavigation from "./src/navigation/BottomNavigation";
import { createStore } from "redux";
import rootReducer from "./src/redux";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const store = createStore(rootReducer);

export default function App() {
  let [fontsLoaded] = useFonts({
    "Mont-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Mont-Med": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Mont-Reg": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <BottomNavigation />
      </Provider>
    );
  }
}
