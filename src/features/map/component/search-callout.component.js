import React from "react";
import styled from "styled-components/native";

const MyText = styled.Text`
  font-size: 10px;
`;
export const MapCallout = ({ restaurant }) => {
  return <MyText>{restaurant.name}</MyText>;
};
