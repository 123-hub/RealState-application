import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import PropertyCard from "./PropertyCard";

export default function Featured() {
  const featureData = [
    {
      featuredName: "Recommended",
      propertyArray: [
        {
          id: 1,
          propertyName: "Woodland Apartments",
          propertyCatergoy: "Apartment",
          rating: "4.5",
          address: "New York, USA",
          image: require("../assets/apartmentiamge.jpg"),
          rent: "1500",
          reviews: "4.3k"
        },
        {
          id: 1,
          propertyName: "Sky Light",
          propertyCatergoy: "Villa",
          rating: "4.5",
          address: "Tempa, Berlin",
          image: require("../assets/ap.jpg"),
          rent: "3500",  reviews: "4.3k"
        },
        {
          id: 1,
          propertyName: "Royal India",
          propertyCatergoy: "Bunglow",
          rating: "4.5",
          address: "Valdor, USA",
          image: require("../assets/ap2.jpg"),
          rent: "5500",  reviews: "4.3k"
        },
        {
          id: 1,
          propertyName: "Woodland Apartments",
          propertyCatergoy: "Apartment",
          rating: "4.5",
          address: "New York, USA",
          image: require("../assets/apartmentiamge.jpg"),
          rent: "1500",  reviews: "4.3k"
        },
      ],
    },
    {
      featuredName: "Nearby Area",
      propertyArray: [
        {
          id: 1,
          propertyName: "Woodland Apartments",
          propertyCatergoy: "Apartment",
          rating: "4.5",
          address: "New York, USA",
          image: require("../assets/apartmentiamge.jpg"),
          rent: "1500",
          reviews: "4.3k"
        },
        {
          id: 1,
          propertyName: "Sky Light",
          propertyCatergoy: "Villa",
          rating: "4.5",
          address: "Tempa, Berlin",
          image: require("../assets/ap.jpg"),
          rent: "3500",  reviews: "4.3k"
        },
        {
          id: 1,
          propertyName: "Royal India",
          propertyCatergoy: "Bunglow",
          rating: "4.5",
          address: "Valdor, USA",
          image: require("../assets/ap2.jpg"),
          rent: "5500",  reviews: "4.3k"
        },
        {
          id: 1,
          propertyName: "Woodland Apartments",
          propertyCatergoy: "Apartment",
          rating: "4.5",
          address: "New York, USA",
          image: require("../assets/apartmentiamge.jpg"),
          rent: "1500",  reviews: "4.3k"
        },
      ],
    },
  ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 20,
      }}
    >
      {featureData.map((value, index) => {
        return (
          <>
            <View key={index} className="flex-row justify-between items-center mt-4">
              <Text className="text-xl font-semibold ">{value.featuredName}</Text>
              <TouchableOpacity>
                <Text>See all</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
               {
                value.propertyArray.map((value,index)=>{
                    return <PropertyCard key={index} data={value} />
                })
               }
               
            </ScrollView>
          </>
        );
      })}
    </ScrollView>
  );
}
