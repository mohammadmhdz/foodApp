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
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  // STARS svg setting // map func do not work on undefined arrays
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  // my solution did not work correctly
  // const ratingArray = new Array(rating);
  // const result = Array.from(ratingArray, (v) => (v === undefined ? "-" : v));

  return (
    <RestuarantCard elevation={5}>
      <Card.Cover
        key={name}
        style={styles.image_container}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Card.Content>
        <Text variant="label">{name}</Text>
        <Text variant="label">{address}</Text>

        <Rating>
          <View style={{ flexDirection: "row" }}>
            {ratingArray.map((item, index) => (
              <Star width={20} height={20} />
            ))}
          </View>
          <Spacer position="left" size="large">
            {isOpenNow && <Open width={20} height={20} />}
          </Spacer>
        </Rating>
        {isClosedTemporarily ? (
          <Text variant="error">CLOSED TEMPORARILY</Text>
        ) : (
          <Text variant="error">open</Text>
        )}
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
