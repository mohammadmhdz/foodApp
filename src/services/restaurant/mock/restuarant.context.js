import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { restaurantsRequest, restuarantsTransform } from "./retuarant.service";
import { LocationContext } from "../../location/location.context";

export const RestuarantsContext = createContext();
export const RestuarantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //we create this to get the search result and put it on screen
  const { location } = useContext(LocationContext);

  //   we set loading to false when we sent request or we have error
  const retrieveRestuarants = (loc) => {
    // we always setRestuarant to null when we want to get it again from local
    setRestaurants([]);
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restuarantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
          // show the result of restuarant that we wonna show in our list
          // console.log(results, "restuarant");
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
      // we set a default time for our setTime
    }, 2000);
  };
  //we call retrieveRestuarants()  when the components mounts down in screen because of empty array in the last part
  //  we add location  to array at the end of useEffect which is ver important and will happen when the location changed(i guess)
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestuarants(locationString);
    }
  }, [location]);
  return (
    <RestuarantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestuarantsContext.Provider>
  );
};
