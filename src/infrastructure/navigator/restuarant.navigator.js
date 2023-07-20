import React from "react";
// here we want to navigate stackBase not with tab
import { RestuarantScreen } from "../../features/resturant/screens/restuarant.screen";
import { Text } from "react-native-paper";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestuarantDetailsScreen } from "../../features/resturant/screens/restuarantDetail.screen";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="RestuarantScreen"
        component={RestuarantScreen}
      />
      <RestaurantStack.Screen
        name="RestuarantDetails"
        component={RestuarantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
