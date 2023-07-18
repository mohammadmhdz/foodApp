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
        <RestuarantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  // focused ro faght bara in gozashtim ke dar surati ke rush budim az ye icon FILL shode estefade kone
                  if (route.name === "Map") {
                    iconName = focused ? "md-map" : "md-map-outline";
                  } else if (route.name === "Settings") {
                    iconName = focused ? "settings" : "settings-outline";
                  } else if (route.name === "restuarant") {
                    iconName = focused
                      ? "md-restaurant"
                      : "md-restaurant-outline";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Settings" component={Setting} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="restuarant" component={RestuarantScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestuarantsContextProvider>
      </ThemeProvider>
      {/* nemidunam dahighan chi mikone expoStatusBar */}
      {/* <ExpoStatusBar /> */}
    </>
  );
}
