import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useFetch } from "../hook/useFetch";
import { styled } from "nativewind";


const Test = () => {
  //   const [data, loading, err] = useFetch(
  //     (url = "https://deba-78-162-11-110.ngrok-free.app/animes/random/")
  //   );
  //   console.log(loading)

  const StyledView = styled(View);
  const StyledText = styled(Text);
  return (
    <StyledView className="flex-1 items-center justify-center shadow bg-white  overflow-visible">
      <View style={{elevation:30}} className="  bg-white overflow-visible">
        <StyledText
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 11,
            },
            shadowOpacity: 0.57,
            shadowRadius: 15.19,

            elevation: 27,
          }}

        >
          Text color changes per Platform! 🎉
        </StyledText>
      </View>
    </StyledView>
  );
};

const styles = StyleSheet.create({});

export default Test;
