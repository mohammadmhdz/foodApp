import { RestuarantScreen } from "./src/features/resturant/screens/restuarant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts } from "@expo-google-fonts/inter";

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
