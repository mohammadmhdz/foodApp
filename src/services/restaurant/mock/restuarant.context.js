import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantsRequest, restuarantsTransform } from "./retuarant.service";

export const RestuarantsContext = createContext();
export const RestuarantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //   we set loading to false when we sent request or we have error
  const retrieveRestuarants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restuarantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
      // we set a default time for our setTime
    }, 2000);
  };
  //we call retrieveRestuarants()  when the components mounts down in screen because of empty array in the last part
  useEffect(() => {
    retrieveRestuarants();
  }, []);
  return (
    <RestuarantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestuarantsContext.Provider>
  );
};
