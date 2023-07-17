import { mocks } from "../index";
// import { camelCase, camelize } from "camelize";
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
  // const newResult = camelize(result);
  // return newResult;
  // var camelizer = require("camelize");
  // return camelizer(result);
  return result;
};

restaurantsRequest()
  .then(restuarantsTransform)
  .then((transformRespond) => {
    console.log(transformRespond);
  })
  .catch((err) => {
    console.log("error");
  });
