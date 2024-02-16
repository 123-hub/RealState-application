import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { MapIcon, MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function PropertyCard({ data }) {
  const navigation = useNavigation();
  console.log(data);
  return (
    <TouchableWithoutFeedback onPress={()=> navigation.navigate('propertyPage',{...data})}>
      <View className="bg-white border-0 p-2 shadow-sm rounded-xl  mb-4  mr-4">
        <View className=" rounded-md">
          <Image source={data.image} className="h-40 w-56 rounded-md" />
        </View>
        <View className="flex-row justify-between items-center mt-4">
          <View className="bg-slate-500 p-1 rounded-lg overflow-hidden">
            <Text className=" text-white text-xs">{data.propertyCatergoy}</Text>
          </View>
          <View className="flex-row justify-center items-center">
            <StarIcon fill={"orange"} />
            <Text>{data.rating}</Text>
          </View>
        </View>
        <Text className="mt-1 text-xl font-medium">{data.propertyName}</Text>
        <View className=" flex-row justify-start items-center">
          <MapPinIcon fill={"gray"} />
          <Text>{data.address}</Text>
        </View>
        <View className="flex-row justify-start items-baseline">
          <Text className="text-xl "> ${data.rent}</Text>
          <Text> /month</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
