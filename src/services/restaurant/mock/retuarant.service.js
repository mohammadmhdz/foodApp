import { mocks } from "../index";
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restuarantsTransform = (result) => {
  var camelize = require("../../../../node_modules/camelize/index");
  return camelize(result);
};

restaurantsRequest()
  .then(restuarantsTransform)
  .then((transformRespond) => {
    console.log(transformRespond);
  })
  .catch((err) => {
    console.log("error");
  });
