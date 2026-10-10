import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Pressable, Text } from "react-native";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#5082e0",
          },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            <Pressable onPress={() => alert("Menu Button Pressed")}>
              <Text style={{ color: "white", fontSize: 16 }}>Menu</Text>
            </Pressable>
          ),

          contentStyle: {
            backgroundColor: "#eed5da",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{
            data: "Guest",
          }}
          // options={({ route }) => ({
          //   title: route.params?.name ?? "About",
          // })}

          


        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
