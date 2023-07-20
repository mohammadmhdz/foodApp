// import "react-native-gesture-handler";
import { RestuarantScreen } from "./src/features/resturant/screens/restuarant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts } from "@expo-google-fonts/inter";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { restaurantsRequest } from "./src/services/restaurant/mock/retuarant.service";
import { RestuarantsContextProvider } from "./src/services/restaurant/mock/restuarant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigator/index";

// REMEMBER TO ADD ESLINT

// for NAVBAR

const Tab = createBottomTabNavigator();
const test = restaurantsRequest();

const Setting = () => <Text>khiar</Text>;
const Map = () => <Text>Map</Text>;

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
        <LocationContextProvider>
          <RestuarantsContextProvider>
            <Navigation />
          </RestuarantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      {/* nemidunam dahighan chi mikone expoStatusBar */}
      {/* <ExpoStatusBar /> */}
    </>
  );
}
