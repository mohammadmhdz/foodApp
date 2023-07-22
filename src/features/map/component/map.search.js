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

export const SearchMap = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchbarContainer>
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
