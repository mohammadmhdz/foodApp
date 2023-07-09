import { View, StyleSheet, Image } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const RestuarantInfo = ({ restaurant = {} }) => {
  const {
    name = "polo",
    photo = "https://www.townandcountrymag.com/leisure/dining/a35968686/the-polo-bar-rides-again/",
    address = "baghale kav",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={1}>
      <Card.Cover
        style={styles.image_container}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
    </Card>
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
