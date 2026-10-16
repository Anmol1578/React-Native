import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DashboardScreen from "./screens/Dashboard";
import SettingScreen from "./screens/SettingScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "My Dashboard",
            drawerLabel: "Dashboard",
            drawerActiveTintColor: "#251b1b",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#6c6f8f",
            },
          }}
        />

        <Drawer.Screen name="Settings" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
