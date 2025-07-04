import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/theme";

import ScanScreen from "./src/screens/Scan";
import HomeScreen from "./src/screens/Home";
import LoginScreen from "./src/screens/Login";
import RegisterScreen from "./src/screens/Register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Scan" component={ScanScreen} />
          {/* <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
