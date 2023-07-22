import MapView from "react-native-maps";
// import { SearchMap } from "../component/map.search";
import { SearchMap } from "../component/map.search";
export const MapScreen = () => {
  return (
    <>
      <SearchMap />
      <MapView style={{ height: "100%" }}></MapView>
    </>
  );
};
