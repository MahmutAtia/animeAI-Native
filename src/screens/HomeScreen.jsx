import React from 'react';
import {View, Text, FlatList,ActivityIndicator} from 'react-native';
import { useFetch } from '../hook/useFetch';
import HomeAnimeCard from '../comonents/cards/homeAnimeCard';
import HomeGenre from '../comonents/homeGenre';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUrl } from '../features/fetchSlice';

const HomeScreen = ({navigation}) => {
  
    const dispatch = useDispatch()
    const [GenreData,Genreloading,Genreerr] = useFetch(url = "https://ea2e-95-10-66-41.ngrok-free.app/animes/genre/");
    
    // content logic
    const urlPart = useSelector(state=>state.fetch.url)
    const [AnimeData,loading,err] = useFetch(url = " https://ea2e-95-10-66-41.ngrok-free.app/animes/"+urlPart);

    console.log(" https://ea2e-95-10-66-41.ngrok-free.app/animes/"+urlPart)
    const [clickedid,setclickedid] = useState(null)
   

   
    return (

        <View className="flex-1 items-center bg-[#1B1E26]  ">
          <View className="flex flex-row m-3 shadow-2xl shadow-red-500 rounded-md">

          {/* {GenreData.map((item,index)=>(<Text>{item.name}</Text>))} */}
        {Genreloading && <Text> </Text> }
         {GenreData &&  <FlatList
         horizontal
        data={[{id:0,name:"All"},...GenreData]}
        renderItem={({item,index}) => <HomeGenre
         onPress={()=>{
            dispatch(changeUrl(item.id!=0? "genre/"+item.id :""))
            setclickedid(item.id)
            }}
        isPressed={clickedid}
        index={index}
        item={item}/>}
        keyExtractor={item => item.id}
        
      />}

        </View>
        {/* {AnimeData.map((item,index)=>( <HomeAnimeCard title={item.title} img_url={item.img_url} />))} */}
        <View className="flex-1 ">
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


export default HomeScreen;
