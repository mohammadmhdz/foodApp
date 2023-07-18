import { locations } from "./location.mock";

// dar inja searchTerm ra migirim o bar asas oon ru location migardim
export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

//
export const locationTransform = (result) => {
  var camelize = require("../../../node_modules/camelize/index");
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
