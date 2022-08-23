import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme  } from "@react-navigation/native";
import { SignUp } from "./screens";
import {useFonts}  from "expo-font";

import Tabs from "./navigation/tabs"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}


const Stack = createStackNavigator()

const App = () => {

   const[loaded] = useFonts ({
      BlackItalic : require("./assets/fonts/Roboto-BlackItalic.ttf"),
      Black       : require("./assets/fonts/Roboto-Black.ttf"),
      BoldItalic  : require("./assets/fonts/Roboto-BoldItalic.ttf"),
      Bold        : require("./assets/fonts/Roboto-Bold.ttf"),
      LightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
      MediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
      Medium: require("./assets/fonts/Roboto-Medium.ttf"),
      Regular: require("./assets/fonts/Roboto-Regular.ttf"),
      ThinItalic :require("./assets/fonts/Roboto-ThinItalic.ttf"),
      Light: require("./assets/fonts/Roboto-Light.ttf"),
  });
  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions = {{
          headerShown: false
        }}
        initialRouteName={"SignUp"}
      >
        <Stack.Screen name="SignUp"  component={SignUp} />

       {/* Tabs */}
       <Stack.Screen name="OrigHome" component={Tabs}  />
      </Stack.Navigator>
    </NavigationContainer>

  )
}


export default App;
