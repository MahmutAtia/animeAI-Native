import React from 'react';
import {View, Image,Text, TouchableOpacity} from 'react-native';
import {useWindowDimensions} from 'react-native';
import {URL,hi} from "@env"
import classNames from 'classnames';



const HomeAnimeCard = ({navigation,item,index}) => {
    const {width:w,height:h} = useWindowDimensions()
    let imgClass = classNames({
        "flex flex-column relative h-[200] w-[170] m-2 items-center justify-end shadow-lg":true,
        "h-[230]" : index%3==0 || index%5==0
    })

    const imgNotFound = "https://static.vecteezy.com/system/resources/thumbnails/007/104/553/small_2x/search-no-result-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
    return (
        <TouchableOpacity 
        onPress={()=>navigation.navigate({name:"Detail",params:{item:item}})} 
        onT>
        <View className={imgClass} >
         {/* dont forget styles for image comonents */}
        <Image className={`h-full w-full rounded-3xl ` }source={{uri:item.img_url?item.img_url:imgNotFound}}/> 

        <View className={`absolute bottom-2 p-2 w-4/5 rounded-full bg-gray-700 opacity-80 justify-center items-center `}>
        <Text className=" text-[#DEE0E1] text-bold ">{item.title}</Text>
        </View>
        </View>
        </TouchableOpacity>
    );
}


export default HomeAnimeCard;
