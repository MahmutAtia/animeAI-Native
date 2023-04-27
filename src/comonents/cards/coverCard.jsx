import React from "react";
import {
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  Dimensions,
  Text
} from "react-native";
import { styled } from "nativewind";
const StyledView = styled(View);

const CoverCard = ({ image_data }) => {
  const { width: w, height: h } = useWindowDimensions();
  //    const {width:w,height:h} =  Dimensions.get('screen');
  return (
    <StyledView className="relative flex-1 bg-transparent p-1 ">

      <StyledView style={{elevation:30}} className=" bg-white  overflow-visible ">
        <Image
          style={{
            width: 0.5 * w,
            height: 0.3 * h,
            top: 0.09 * h,
            left: -0.005 * w,
            alignSelf: "center",
          }}
          className="absolute  rounded-2xl -rotate-6  object-cover "
          source={{ uri: image_data[0].img_url }}
        />
      </StyledView>

      <StyledView className=" ">
        <Image
          style={{
            width: 0.5 * w,
            height: 0.3 * h,
            top: 0.1 * h,
            right: -0.005 * w,
            alignSelf: "center",
          }}
          className="absolute rounded-2xl  rotate-6 object-cover  "
          source={{ uri: image_data[8].img_url }}
        />
      </StyledView>
      <StyledView className="shadow-xl shadow-red-500 ">
        <Image
          style={{
            width: 0.5 * w,
            height: 0.38 * h,
            top: 0.04 * h,
            alignSelf: "center",
          }}
          className="absolute rounded-2xl object-cover  "
          source={{ uri: image_data[2].img_url }}
        />
      </StyledView>
    </StyledView>
  );
};

const styles = StyleSheet.create({});

export default CoverCard;
