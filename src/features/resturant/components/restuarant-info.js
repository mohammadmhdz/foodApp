import { StyleSheet, View } from "react-native";
import { Text, Card } from "react-native-paper";
import Star from "../../../../assets/Star2.svg";
import Open from "../../../../assets/open.svg";

import { styled } from "styled-components/native";

//our CSS style
const Title = styled.Text`
  color: white;
  font-family: Oswald-black;
`;
const RestuarantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

const Rating = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2px;
  padding-bottom: 2px;
`;
// our sample data
export const RestuarantInfo = ({ restaurant = {} }) => {
  const {
    name = "polo",
    photo = "https://www.townandcountrymag.com/leisure/dining/a35968686/the-polo-bar-rides-again/",
    address = "baghale kav",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily,
  } = restaurant;

  // for stars
  const ratingArray = new Array(rating);
  const result = Array.from(ratingArray, (v) => (v === undefined ? "-" : v));

  return (
    <RestuarantCard elevation={1}>
      <Card.Cover
        style={styles.image_container}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Card.Content>
        <Title variant="titleLarge">Card title</Title>
        <Rating>
          <View style={{ flexDirection: "row" }}>
            {result.map((item, index) => (
              <Star width={20} height={20} />
            ))}
          </View>
          {isOpenNow && <Open width={20} height={20} />}
        </Rating>

        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
    </RestuarantCard>
    // <View style={styles.card_container}>
    //   <Image
    //     style={styles.logo}
    //     source={{
    //       uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.architecturaldigest.com%2Fphotos%2F55e793d1cd709ad62e901830%2F16%3A9%2Fw_1280%2Cc_limit%2Fdam-images-travel-polo-bar-polo-bar-ralph-lauren-restaurant-manhattan-01-h670-search-wm.jpg&tbnid=yBucnykQRjE6pM&vet=12ahUKEwjq3LL2j4GAAxXNnCcCHaP1BmoQMygBegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fwww.architecturaldigest.com%2Fstory%2Fpolo-bar-ralph-lauren-restaurant-manhattan-article&docid=blVFa6f2HvuTMM&w=656&h=369&q=polo%20restaurant&ved=2ahUKEwjq3LL2j4GAAxXNnCcCHaP1BmoQMygBegUIARDJAQ",
    //     }}
    //   />

    //   <Text>{name}</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    flex: 0.3,
    backgroundColor: "white",
  },
  logo: {
    width: 44,
    height: 55,
  },
  image_container: {
    margin: 10,
  },
});
