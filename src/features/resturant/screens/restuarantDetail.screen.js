import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestuarantInfo } from "../components/restuarant-info";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { useState } from "react";
export const RestuarantDetailsScreen = ({ route }) => {
  //   console.log(route);
  const { restaurant } = route.params;
  const [folder1, setFolder1] = useState(true);
  return (
    <SafeArea>
      <ScrollView>
        <RestuarantInfo restaurant={restaurant} />
        <List.Section>
          <List.Accordion
            title=" menu1"
            left={(props) => <List.Icon {...props} icon="breakfast" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title=" menu2"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Item title="third item" />
            <List.Item title="fourth item" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
