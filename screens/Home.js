import React from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import {} from "react-native-heroicons/outline";
import {
  BellIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  ServerStackIcon,
} from "react-native-heroicons/solid";
import themes from "../themes";
import Categories from "../components/Categories";
import { StatusBar } from "expo-status-bar";
import Featured from "../components/Featured";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

function Home() {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <SafeAreaView className="mx-4">
      <StatusBar style="dark" />
      {/** top location bar  */}
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-black text-sm ">Location</Text>
          <View className="flex-row  items-center">
            <MapPinIcon />
            <Text className="font-semibold">New york, NYC</Text>
          </View>
        </View>
        <View>
          <BellIcon color={"black"} />
        </View>
      </View>
      {/**SEARCH BOX */}
      <View className="my-4">
        <View className="flex-row justify-center items-center">
          <View className="flex-1 flex-row justify-center items-center border border-gray-300 p-3 rounded-full">
            <MagnifyingGlassIcon />
            <TextInput className="flex-1" placeholder="Search" />
          </View>
          <View
            className="p-3  rounded-full mx-1"
            style={{ backgroundColor: themes.primary(1) }}
          >
            <ServerStackIcon fill={"white"} />
          </View>
        </View>
      </View>
      {/**Categories section */}

      {/**featured section */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: tabBarHeight + 30 }}
      >
        <View className="my-4">
          <Categories />
        </View>
        <Featured />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
