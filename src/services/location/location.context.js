import React, { createContext, useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();
export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const onSearch = (searchKeyword) => {
    // lower line write the search entry for us
    // console.log(searchKeyword);
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword)
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        // inja be ma oon natije search ke mikhahim ra be ma neshan midahad va natije promise ra
        // console.log(result, "locarion result");
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  // vaghti use effect ma empty array bashe ba har seri render shodan in method farakhani mishavad ke chize khubi nis o  bayad avazesh konim
  useEffect(() => {
    onSearch();
  }, []);
  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
