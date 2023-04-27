import React from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { add, add_payload, substract } from '../features/counterSlice';

const Counter = ({navigation }) => {
  const num = useSelector(state=>state.counter.num)
  const dispatch = useDispatch()
    return (
        <View className="flex-1 items-stretch justify-around">
          <Text className = "text-red-400 text-8xl text-center mb-10">{num}</Text>
          <View className="m-2 border-2 rounded-md">

          <Button onPress={()=>{dispatch(add())}} className="m-10" title='Add'/>
          </View>
          <Button  onPress={()=>{dispatch(substract())}} title='Substract'/>
          <Button  onPress={()=>{dispatch(add_payload(100))}} title='Add with input'/>
          <Button  onPress={()=>navigation.navigate("Home")} title='go to Animes'/>

        </View>
    );
}

const styles = StyleSheet.create({})

export default Counter;
