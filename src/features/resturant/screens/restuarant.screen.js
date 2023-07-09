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

export const RestuarantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search_con}>
        {/* <Text>search</Text> */}
        <Searchbar />
      </View>
      <View style={styles.list_con}>
        <RestuarantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //if we are android use statusbar height to have a good marginTop from the top of the screen
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "red",
  },
  search_con: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "green",
  },
  list_con: {
    flex: 0.9,
    backgroundColor: "blue",
    padding: 20,
  },
});
