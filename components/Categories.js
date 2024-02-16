import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function Categories() {
  const CategoriesList = [
    {
      name: "Hotels",
      image: require("../assets/bunglow.png"),
    },
    {
      name: "House",
      image: require("../assets/home.png"),
    },
    {
      name: "Villa",
      image: require("../assets/villa.png"),
    },
    {
      name: "Apartment",
      image: require("../assets/apartment.png"),
    },
    {
      name: "Bunglows",
      image: require("../assets/bunglow.png"),
    },
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {CategoriesList.map((value, index) => {
        return (
          <View className="flex justify-center items-center mx-4">
            <View className=" flex justify-center items-center  rounded-full">
              <Image source={value.image}  className="w-10 h-10"/>
            </View>
            <Text className="text-md font-medium mt-1">{value.name}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
