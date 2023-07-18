import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import { RestuarantInfo } from "../components/restuarant-info";
import { RestuarantsContext } from "../../../services/restaurant/mock/restuarant.context";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useContext } from "react";

// in line 17 : we have used a way that check if we have currentHeight by && and then set it as margin-top(in IOS we dont have that and that was our trouble)
// dar safeArea flex : 1dashtim vali bekhatere oon navBar payini baresh dashtim
const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

// nahve CSS neveshtan bara FLATLIST motefavete
const RestuarantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  margin-bottom: 70px;
`;

const SearchbarContainer = styled(View)`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 15px;
`;

export const RestuarantScreen = () => {
  const restuarantContext = useContext(RestuarantsContext);
  console.log(restuarantContext);
  return (
    <SafeArea>
      <SearchbarContainer>
        {/* <Text>search</Text> */}
        <Searchbar />
      </SearchbarContainer>
      {/* flatlist : keyExtractor miad name ra be onvan key dar nazar migire ,,, data felan nadadim behesh ,,, renderItem ham chzie ke gharare listi azash doros kone ,,, dar content containerSyle be harkdom az content ha style midahim*/}
      <RestuarantList
        data={restuarantContext.restuarants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestuarantInfo />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
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
});
