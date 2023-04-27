import React from 'react';
import {View, Text,FlatList,ActivityIndicator} from 'react-native';
import { useFetch } from '../hook/useFetch';
import HomeAnimeCard from '../comonents/cards/homeAnimeCard';

const RecomendScreen = ({route,navigation}) => {
    const item = route.params.item;

    const [AnimeData,loading,err] = useFetch(url =`https://deba-78-162-11-110.ngrok-free.app/animes/recommend/${item.id}`);
    return (
      <View className=" flex-1 bg-[#1B1E26] items-center">
      <Text className="w-full text-white font-extrabold text-center text-2xl text-bold px-3 mb-3 pb-2rounded-xl rounded-b-3xl">Most Similar To: {item.title}</Text>
        <View className=" rounded flex-1 z-10">
        {loading && <ActivityIndicator size={"large"} style={{flex:1,margin:30}} className="mt-100 flex-1"/> }
         {AnimeData &&  <FlatList
        data={AnimeData}
        renderItem={({item,index}) => 

         <HomeAnimeCard
         item={item}
         index={index}
         navigation = {navigation} /> }

        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}

      />}
      </View>
      </View>
    );
}


export default RecomendScreen;
