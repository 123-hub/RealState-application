import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ArrowLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import themes from "../themes";
import { StatusBar } from "expo-status-bar";
import {
  ArrowsPointingOutIcon,
  BeakerIcon,
  HomeIcon,
  PhoneIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { ScrollView } from "react-native-gesture-handler";

export default function PropertyPage({ route, navigation }) {
  console.log("here", route.params);
  const Tab = createMaterialTopTabNavigator();

  const {
    image,
    address,
    propertyCatergoy,
    propertyName,
    rating,
    rent,
    reviews,
  } = route.params;
  const [swipableState, setSwipableState] = useState("about");
  return (
    <View className="h-screen">
      <StatusBar style="light" />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute z-10 top-14 left-4 rounded-full p-2"
        style={{ backgroundColor: themes.primary(1) }}
      >
        <ArrowLeftIcon color={"white"} />
      </TouchableOpacity>
      <Image source={image} className="h-80" />
      {/** below image portion */}
      <View className="mx-4">
        <View className="flex-row justify-between items-center mt-4">
          <View className="bg-slate-500 p-1 rounded-lg overflow-hidden">
            <Text className=" text-white text-xs">{propertyCatergoy}</Text>
          </View>
          <View className="flex-row justify-center items-center">
            <StarIcon fill={"orange"} />
            <Text>{rating}</Text>
            <Text> ({reviews} reviews)</Text>
          </View>
        </View>
        <Text className="text-black text-2xl font-bold mt-4">
          {propertyName}
        </Text>
        <Text className="text-gray text-sm ">{address}</Text>

        {/**SWIPABLE colummns buttons*/}
        <View className="w-full flex-row justify-stretch items-center mt-4">
          <TouchableOpacity
            onPress={() => setSwipableState("about")}
            className={`w-1/3  flex justify-center items-center ${
              swipableState === "about" ? "border-b-4" : "border-b"
            }`}
          >
            <Text className="text-md my-2 font-medium">About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSwipableState("gallery")}
            className={`w-1/3  flex justify-center items-center ${
              swipableState === "gallery" ? "border-b-4" : "border-b"
            }`}
          >
            <Text className="text-md my-2 font-medium">Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSwipableState("reviews")}
            className={`w-1/3  flex justify-center items-center ${
              swipableState === "reviews" ? "border-b-4" : "border-b"
            }`}
          >
            <Text className="text-md my-2 font-medium">Reviews</Text>
          </TouchableOpacity>
        </View>

        {/**swipable col */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 10,
            paddingBottom: 20,
          }}
        >
          <View>
            <View className="flex-row justify-evenly mt-4">
              <View className="flex-row justify-center items-center">
                <HomeIcon />
                <Text className="font-bold ml-1">3 Beds</Text>
              </View>
              <View className="flex-row justify-center items-center">
                <BeakerIcon />
                <Text className="font-bold ml-1">1 Bath</Text>
              </View>
              <View className="flex-row justify-center items-center">
                <ArrowsPointingOutIcon />
                <Text className="font-bold ml-1">1024 sqrt</Text>
              </View>
            </View>

            {/**description od about */}
            <View>
              <Text className="font-bold mt-4 mb-2">Description</Text>
              <Text className="text-gray-500">
                In the search bar at the top of the Settings tab, type "word
                wrap" and press Enter. Look for the setting named "Editor: Word
                Wrap" and make sure it's set to "on". This setting will
                automatically wrap long lines in the editor. Close the Settings
                tab
              </Text>
            </View>
            <Text className="font-bold mt-4 mb-2">Listing Agent</Text>
            <View
              className="flex-row p-1  items-center  rounded-full"
              style={{ backgroundColor: themes.primary(1) }}
            >
              <View
                className=" h-16 w-16 overflow-hidden rounded-full shadow-lg border-2 border-white"
                style={{ shadowColor: "white" }}
              >
                <Image
                  className="h-24 w-24"
                  source={require("../assets/person.jpg")}
                />
              </View>
              <View className="flex-1 pl-2">
                <Text className="text-xl text-white font-bold">
                  Sourabh tiwari
                </Text>
              </View>
              <TouchableOpacity className="bg-white p-2 rounded-full mr-4">
                <PhoneIcon />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      {/**bottom book now  */}
      <View className="absolute bg-white w-screen h-24 bottom-0 pt-4 border-t">
        <View className=" flex-row justify-around items-center">
          <View>
            <Text>Total Price</Text>
            <Text>
              ${rent} <Text style={{ color: themes.primary(1) }}>/month</Text>
            </Text>
          </View>
          <TouchableOpacity
            className="py-4 px-8 rounded-full"
            style={{ backgroundColor: themes.primary(1) }}
          >
            <Text className="text-lg font-semibold text-white">Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
