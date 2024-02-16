import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Setting from "../screens/Setting";
import { NavigationContainer } from "@react-navigation/native";
import {
  ChatBubbleBottomCenterIcon,
  FaceFrownIcon,
  HeartIcon,
  HomeIcon,
  MapIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Favourite from "../screens/Favourite";
import Explore from "../screens/Explore";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import PropertyPage from "../screens/PropertyPage";
import Welcome from "../screens/Welcome";
const Tab = createBottomTabNavigator();
const stack = createStackNavigator();

function StackNavigator() {
  return (
    <stack.Navigator initialRouteName="Welcome">
      <stack.Screen name="HomeStack" component={TabNavigator} options={{headerShown:false}}/>
      <stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
      <stack.Screen
        name="propertyPage"
        component={PropertyPage}
        options={{headerShown:false}}
      />
    </stack.Navigator>
  );
}
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14 },
        tabBarAllowFontScaling: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarBadge: 4,
          tabBarBadgeStyle: { backgroundColor: "pink" },
          headerShown: false,
          tabBarIcon: (focused) => <HomeIcon size={30} />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: () => <HeartIcon size={30} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{ tabBarIcon: () => <MapIcon size={30} /> }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: () => <ChatBubbleBottomCenterIcon size={30} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarIcon: () => <UserIcon size={30} /> }}
      />
    </Tab.Navigator>
  );
}

function NavigationRoutes() {
  return <NavigationContainer>
   <StackNavigator/>
  </NavigationContainer>;
}

export default NavigationRoutes;
