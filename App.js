import { RestuarantScreen } from "./src/features/resturant/screens/restuarant.screen";
import { View, StyleSheet, Image, Text } from "react-native";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useCallback } from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import * as Font from "expo-font";

// REMEMBER TO ADD ESLINT

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Oswald-black": require("./assets/fonts/Oswald-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestuarantScreen />
      </ThemeProvider>
      {/* nemidunam dahighan chi mikone expoStatusBar */}
      {/* <ExpoStatusBar /> */}
    </>
  );
}
