import classNames from 'classnames';
import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HomeGenre = ({item,index,onPress,isPressed}) => {

    console.log(item.id,index)

    // clicked logic
    const classes = classNames([
        "mx-1 p-4 rounded-full opacity-80 ",
       "bg-"+(isPressed==index?"red-500":"red-400")

    ])
    
    return (
        <TouchableOpacity onPress={onPress}>
        <View className={classes}>
        <Text className=" text-white text-bold">{item.name}</Text>
        </View>
        </TouchableOpacity>
    );
}


export default HomeGenre;
