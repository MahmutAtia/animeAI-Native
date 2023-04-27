import classNames from "classnames";
import React from "react";
import { SwipeButton } from "react-native-expo-swipe-button";

import {
  View,
  Text,
  Image,
  Button,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

const DetailScreen = ({ route, navigation }) => {
  console.log(route.params);
  const item = route.params.item;
  const { width: w, height: h } = useWindowDimensions();
  console.log(item.genre);

  const classes = classNames([
    "absolute  top-[300] left-[190] bg-transparent rounded-3xl w-100 h-100 z-30 p-5 ",
  ]);
  return (
    <View className="relative bg-black flex flex-1 items-center shadow-2xl shadow-black">
      {/* <Image className="object-contain w-full h-full opacity-20"  /> */}
      <View className="  bg-black w-full h-[40%]  px-4 pt-8  overflow-hidden shadow-2xl shadow-white">
        <Image
          className="object-cover w-full h-full rounded-t-2xl shadow-xl z-10"
          source={{ uri: item.img_url }}
        />
      </View>
      <ImageBackground
        className=" z-0  object-contain w-full h-full opacity-40 "
        blurRadius={8}
        source={{ uri: item.img_url }}
      />
     

      {/* low body */}

      <View className="absolute bottom-0 w-full h-[60%] rounded-t-3xl px-4 space-y-4  ">

        

        <View className="pt-7  rounded-full z-20 shadow-2xl shadow-red-500">
          <Text className="text-white text-center font-extrabold text-2xl">
            {" "}
            {item.title}
          </Text>
          <Text className="text-gray-400 text-center text-sm">
            {" "}
            {item.aired}
          </Text>
        </View>

        <View className="flex flex-row border rounded-xl border-gray-900 items-center justify-evenly shadow-2xl shadow-red-500">
          <View className="flex p-4 items-center">
            <Feather name="tv" size={24} color="white" />
            <Text className="text-white">episodes {item.episodes}</Text>
          </View>

          <View className="flex p-4  p-4  rounded-full items-center">
            <AntDesign name="star" size={24} color="white" />
            <Text className="text-white">ranked {item.ranked}</Text>
          </View>
          <View className="flex p-4  p-4 rounded-full items-center">
            <AntDesign name="heart" size={24} color="white" />
            <Text className="text-white">score {item.score}</Text>
          </View>
        </View>

        <ScrollView className="flex  ">

          <Text className="text-gray-400 text-left text-sm">
            {item.synopsis}
          </Text>
       

        <View horizontal className="flex flex-row ">
          {item.genre.slice(0, 4).map((elment, index) => (
            <Text
              key={elment}
              className="text-white p-2 border rounded-full border-gray-700 opacity-80 m-1"
            >
              {" "}
              {elment}
            </Text>
          ))}
        </View>

        {/* <FlatList
        contentContainerStyle={{padding:0}}
          horizontal
          data={item.genre}
          renderItem={({ item, index }) => (
            <Text
              key={item}
              className="text-white p-2 border rounded-full border-gray-700 opacity-80 m-1"
            >
              
              {item}
            </Text>
          )}
        /> */}

        </ScrollView>
        <SwipeButton
        Icon={
          <MaterialIcons name="keyboard-arrow-right" size={50} color="white" />
        }
        onComplete={() => navigation.navigate({ name: "Recommend", params: { item: item } })}
        title="Get recommendation"
        borderRadius={180}
        containerStyle={{ backgroundColor: 'gray' }}
        underlayTitle="Get recommendation"
        underlayTitleStyle={{ color: 'white' }}
      />
        {/* <Button
          onPress={() =>
            
          }
          title="Recommend"
        /> */}
      </View>
    </View>
  );
};

export default DetailScreen;
