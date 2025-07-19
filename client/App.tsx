// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/theme";

import ScanScreen from "./src/screens/Scan";
import HomeScreen from "./src/screens/Home";
import LoginScreen from "./src/screens/Login";
import RegisterScreen from "./src/screens/Register";
import ProductDetailsScreen from "./src/screens/ProductDetails";
import ProfileScreen from "./src/screens/Profile";

import { AuthProvider, useAuth } from "./contexts/authContexts";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Scanner" component={ScanScreen} />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetailsScreen}
            />
            <Stack.Screen name="Профиль" component={ProfileScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </AuthProvider>
  );
}
