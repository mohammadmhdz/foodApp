import { StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import Star from "../../../../assets/Star2.svg";
import Open from "../../../../assets/open.svg";
import { styled } from "styled-components/native";
//CONSISTENCY
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

//our CSS style
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

  // STARS svg setting // map func do not work on undefined arrays
  const ratingArray = new Array(rating);
  const result = Array.from(ratingArray, (v) => (v === undefined ? "-" : v));

  return (
    <RestuarantCard elevation={1}>
      <Card.Cover
        style={styles.image_container}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Card.Content>
        <Text variant="label">Card title</Text>
        <Rating>
          <View style={{ flexDirection: "row" }}>
            {result.map((item, index) => (
              <Star width={20} height={20} />
            ))}
          </View>
          <Spacer position="left" size="large">
            {isOpenNow && <Open width={20} height={20} />}
          </Spacer>
        </Rating>

        <Text variant="error">CLOSED TEMPORARILY</Text>
      </Card.Content>
    </RestuarantCard>
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
