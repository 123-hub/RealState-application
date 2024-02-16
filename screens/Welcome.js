import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import themes from "../themes";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Image
        source={require("../assets/mobileDesign.png")}
        className="h-screen w-screen"
      />
      <View className="absolute z-10 bottom-0 h-2/4 bg-white w-screen pt-6">
        <Text className="text-center text-3xl font-semibold">
          <Text style={{ color: themes.primary(1) }}>Discover</Text> and Find
          Your{" "}
        </Text>
        <Text className="text-center text-3xl font-semibold">
          Perfect <Text style={{ color: themes.primary(1) }}> Dream House</Text>
        </Text>
        <View className="mt-4">
          <Text className="text-gray-500 text-center">
            App to search and discover the most suitable
          </Text>
          <Text className="text-gray-500 text-center">
            place for you to stay
          </Text>
        </View>
        <View className="w-full px-4 mt-12"> 
          <TouchableOpacity onPress={()=> navigation.navigate('HomeStack')} className="w-full rounded-full px-8 py-4" style={{backgroundColor:themes.primary(1)}}>
            <Text className="text-center text-white font-bold text-xl">Let's Get Started</Text>
          </TouchableOpacity>
          <Text className="text-center mt-2 text-md">Already have an Account? <Text style={{color:themes.primary(1)}} className="font-bold">Login</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
