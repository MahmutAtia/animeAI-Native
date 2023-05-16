import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Button,
  ActivityIndicator,
  Text,
  useWindowDimensions,
} from "react-native";
import { useFetch } from "../hook/useFetch";
import CoverCard from "../comonents/cards/coverCard";
import WelcomeCover from "../comonents/welcomeCover";
import { TouchableOpacity } from "react-native";

const CoverScreen = ({ navigation }) => {
  const [data, loading, err] = useFetch(
    (url = "  https://ea2e-95-10-66-41.ngrok-free.app/animes/random/")
  );
  console.log(data, loading, err);
  const { width: w, height: h } = useWindowDimensions();

  return (
    <View className="flex-1 justify-end items-center bg-[#1B1B1B] ">
      {loading && <ActivityIndicator size={"large"} color={"white"} />}

      {!loading && (
        <View className="">

          <Text
            style={{ fontSize: 0.1 * w }}
            className="text-white text-center " 
          >
            Kon'nichiwa 👋
          </Text>
          

          <CoverCard image_data={data} />

          {/* the login but */}
          <View className="flex flex-row justify-center space-x-5 mt-6 ">
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              className="flex rounded-3xl  bg-blue-500"
            >
              <Text style={{fontSize:0.05*w, padding:0.04*w}} className="text-center capitalize text-white   ">
                Sign up
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              className="flex rounded-3xl  bg-blue-500"
            >
              <Text style={{fontSize:0.05*w, padding:0.04*w}} className="text-center capitalize text-white  ">
                Login
              </Text>
            </TouchableOpacity>
          </View>

 {/* enddddddddddddddddddddddddd */}


         

          <Text style={{fontSize:0.05*w, padding:0.01*w}} className="text-center  text-red-400">Welcome to animeAI 
            </Text>
          <Text style={{fontSize:0.03*w, padding:0.01*w}} className="text-center  text-gray-200">Get Ai Based Anime Recommendations "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
 
            </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="rounded-3xl m-3 bg-red-400 shadow-2xl shadow-red-400"
          >


            <Text className="text-center capitalize text-white text-2xl p-2  ">
              Start 
            </Text>
          </TouchableOpacity>
          <View
            onPress={() => navigation.navigate("Home")}
            className="rounded-3xl  shadow-2xl"
          >
          <Text style={{fontSize:0.14*w, padding:0.001*w}} className="text-white m-auto  ">
            anime<Text style={{fontSize:0.22*w, padding:0.001*w}} className="text-red-500">AI</Text>
          </Text>
          </View>

        </View>
      )}
    </View>
  );
};

export default CoverScreen;
