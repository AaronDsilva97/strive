// In App.js in a new project

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import DescriptionScreen from "../screens/DescriptionScreen";
import CustomHeader from "../component/CustomHeader";

const Stack = createStackNavigator();

export function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: () => <CustomHeader>Home</CustomHeader> }}
      />
      <Stack.Screen
        name="DescriptionScreen"
        component={DescriptionScreen}
        options={{
          headerTitle: () => <CustomHeader>Description</CustomHeader>,
        }}
      />
    </Stack.Navigator>
  );
}

export function Account() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerTitle: () => <CustomHeader>Account</CustomHeader> }}
      />
    </Stack.Navigator>
  );
}
