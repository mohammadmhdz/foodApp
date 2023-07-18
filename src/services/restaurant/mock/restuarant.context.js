import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantsRequest, restuarantsTransform } from "./retuarant.service";

export const RestuarantsContext = createContext();
export const RestuarantsContextProvider = ({ children }) => {
  return (
    <RestuarantsContext.Provider value={{ restuarants: [1, 2, 3, 4, 5, 6, 7] }}>
      {children}
    </RestuarantsContext.Provider>
  );
};
