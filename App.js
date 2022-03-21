import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { store } from "./src/app/store";
import { Provider } from "react-redux";

//-> component imports
import Routes from "./Routes";

export default App = () => {
  let [fontsLoaded] = useFonts({
    NunitoRegular: require("./assets/fonts/NunitoRegular.ttf"),
    NunitoBold: require("./assets/fonts/NunitoBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
};
