import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { RestuarantInfo } from "../components/restuarant-info";
import { RestuarantsContext } from "../../../services/restaurant/mock/restuarant.context";
import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FlatList, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useContext } from "react";
import { View } from "react-native";
// in line 17 : we have used a way that check if we have currentHeight by && and then set it as margin-top(in IOS we dont have that and that was our trouble)
// dar safeArea flex : 1dashtim vali bekhatere oon navBar payini baresh dashtim
// const SafeArea = styled(SafeAreaView)`
//   ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
// `;

// nahve CSS neveshtan bara FLATLIST motefavete
const RestuarantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
// matgin-bottom : 70px;
export const RestuarantScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestuarantsContext);
  // console.log(restaurants);
  // console.log(navigation);
  return (
    <SafeArea>
      <Search />
      {/* flatlist : keyExtractor miad name ra be onvan key dar nazar migire ,,, data felan nadadim behesh ,,, renderItem ham chzie ke gharare listi azash doros kone ,,, dar content containerSyle be harkdom az content ha style midahim*/}
      {/* activityIndicator : bara LOADIND safhe hast o style dadanesh ajib shode o niaz be taghir dare badan*/}
      {isLoading ? (
        <View style={{ position: "absolute", top: "200%", left: "50%" }}>
          <ActivityIndicator
            animating={true}
            size={50}
            colors="blue"
            style={{ marginLeft: -25 }}
          />
        </View>
      ) : (
        <RestuarantList
          data={restaurants}
          renderItem={({ item, index }) => {
            //item is one object off an array
            // console.log(item, index);
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestuarantDetails", { restaurant: item })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestuarantInfo restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
// const styles = StyleSheet.create({
// LINE 14 TO 16 DO THE SAME THING AS CONTAINER
// container: {
//   flex: 1,
//   //if we are android use statusbar height to have a good marginTop from the top of the screen
//   marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   backgroundColor: "red",
// },
//searchBarContainer do search_con duties
// search_con: {
//   flex: 0.1,
//   flexDirection: "row",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: 20,
//   backgroundColor: "white",
// },
// });
