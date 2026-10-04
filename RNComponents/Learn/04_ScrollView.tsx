import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
const logoImg = require("./assets/android-icon-background.png");

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 50,
      }}
    >
      <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />

        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore vero
          placeat harum eum dolorum! Blanditiis vitae asperiores ex commodi
          ipsum saepe laboriosam eligendi. A odio rerum ipsum eveniet magnam
          dolores nobis. Possimus repellat minus doloremque hic dolor omnis
          pariatur officia corporis. Pariatur, sequi suscipit excepturi natus
          quia, tempora saepe laudantium non quo et, harum repudiandae a sint ex
          repellat perspiciatis eos quis veniam aperiam reprehenderit autem
          omnis atque aliquam cumque? Illum sit quisquam corporis sequi, totam
          consectetur nobis quam repellendus! hic dolor omnis pariatur officia
          corporis. Pariatur, sequi suscipit excepturi natus quia, tempora saepe
          laudantium non quo et, harum repudiandae a sint ex repellat
          perspiciatis eos quis veniam aperiam reprehenderit autem omnis atque
          aliquam cumque? Illum sit quisquam corporis sequi, totam consectetur
          nobis quam repellendus! perspiciatis eos quis veniam aperiam
          reprehenderit autem omnis atque aliquam cumque? Illum sit quisquam
          corporis sequi, totam consectetur nobis quam repellendus! hic dolor
          omnis pariatur officia corporis. Pariatur, sequi suscipit excepturi
          natus quia, tempora saepe laudantium non quo et, harum repudiandae a
          sint ex repellat perspiciatis eos quis veniam aperiam reprehenderit
          autem omnis atque aliquam cumque? Illum sit quisquam corporis sequi,
          totam consectetur nobis quam repellendus!
        </Text>

        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}
