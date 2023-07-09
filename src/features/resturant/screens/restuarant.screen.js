import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import { RestuarantInfo } from "../components/restuarant-info";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import styled from "styled-components/native";

// in line 17 : we have used a way that check if we have currentHeight by && and then set it as margin-top(in IOS we dont have that and that was our trouble)
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

const SearchbarContainer = styled(View)`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 15px;
`;
export const RestuarantScreen = () => {
  return (
    <SafeArea>
      <SearchbarContainer>
        {/* <Text>search</Text> */}
        <Searchbar />
      </SearchbarContainer>
      <View style={styles.list_con}>
        <RestuarantInfo />
      </View>
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
  list_con: {
    flex: 0.9,

    padding: 20,
  },
});
