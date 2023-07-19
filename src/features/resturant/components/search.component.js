import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const SearchbarContainer = styled(View)`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 15px;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  //   natije estefade az useContext ra neshan midahad
  //   console.log(locationContext);

  // video 20
  // in useEffect az nazare techniki khub niso bayad ye fekri barash bokonim
  // useEffect(() => {
  //   search(searchKeyword);
  // }, []);
  return (
    <SearchbarContainer>
      {/* <Text>search</Text> */}
      <Searchbar
        placeholder="enter your city"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword.toLowerCase());
        }}
        onChangeText={(text) => {
          if (!text.length) {
          }
          setSearchKeyword(text);
        }}
      />
    </SearchbarContainer>
  );
};
