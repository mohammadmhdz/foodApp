import { mocks } from "../index";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

// nahve estefade az result besiar jaleb bud ke be array RESULT dakhele json dastressi peyda kardim
export const restuarantsTransform = ({ results = [] }) => {
  //dar inja harekat JAVASCRIPT zadim o be json chize jadid ezafe kardim
  const mappedResults = results.map((restaurant) => {
    //   restaurant.photos = restaurant.photos.map((p) => {
    //     return mockImages[0];
    //   });

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  var camelize = require("../../../../node_modules/camelize/index");
  return camelize(mappedResults);
};

// in farakhani ra ma baraye mesal in ja anjam dadim vali dar vaghe dar jahaye dg bayda farakhani konim
// restaurantsRequest()
//   .then(restuarantsTransform)
//   .then((transformRespond) => {
//     console.log(transformRespond);
//   })
//   .catch((err) => {
//     console.log("error");
//   });
