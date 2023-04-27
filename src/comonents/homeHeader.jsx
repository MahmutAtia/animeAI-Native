import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {FontAwesome5, SimpleLineIcons,EvilIcons, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { changeUrl } from "../features/fetchSlice";

const HomeHeader = ({search}) => {
    const dispatch = useDispatch()
  return (
    <View className="bg-[#1B1E26] px-5 py-2  shadow-2xl shadow-blue-900">
      {/* Row 1  */}
      <View className="flex flex-row justify-between mt-9 mb-3 mx-2 shadow-2xl shadow-green-700">
        {/* Right */}
        <View className="relative flex flex-row items-center ">
        <View className=" absolute right-[175] z-10 rounded-full px-4 py-3 bg-gray-600 ">
        <FontAwesome5 name="ethereum" size={24} color="white"/>
            
              </View>
        <Text className=" p-4 px-10 text-gray-300 bg-[#2D3240] rounded-full">0 Recommendations</Text>
        </View>

        {/* Left */}
        <View className="p-3 rounded-full bg-[#2D3240] ">
          <Ionicons name="person" size={24} color="white" />
        </View>
        
      </View>

      {/* Row 2 */}
     { search && <View className="flex flex-row ">
        <View className="flex flex-row">

        </View>
        <View className="flex flex-row items-center bg-[#2D3240] p-4 px-8 w-full rounded-full">
        <SimpleLineIcons name="magnifier" size={24} color="#1E2129" />
        <TextInput onChangeText={(value)=>{dispatch(changeUrl("search/"+value))}} className="ml-3 text-gray-300 text-lg" placeholder="Ape,naruto..."/>
            
        </View>
      </View>}
    </View>
  );
};

export default HomeHeader;
