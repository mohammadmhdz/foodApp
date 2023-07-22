import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";

import { useContext, useState, useEffect } from "react";
// import { SearchMap } from "../component/map.search";
import { Text } from "react-native-paper";
import { SearchMap } from "../component/map.search";
import { LocationContext } from "../../../services/location/location.context";
import { RestuarantsContext } from "../../../services/restaurant/mock/restuarant.context";
import { MapCallout } from "../component/search-callout.component";
export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants, isLoading } = useContext(RestuarantsContext);
  // creating a good view on map with 2parameters below
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);
  return (
    <>
      <SearchMap />
      {/* we use this region property to set the map */}
      {/* nokte ghabel tavajoh ineke ke ma barate taghir jaye map az LOCATION estefade kardim vali baraye PIN az restuarant estefade kardim */}
      <MapView
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
        style={{ height: "100%" }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              //   title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout>
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </>
  );
};
