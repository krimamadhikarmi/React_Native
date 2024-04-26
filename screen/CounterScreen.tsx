import { useState } from "react";
import { Button, View, Text } from "react-native";

export default function CounterScreen(){
    const [counter,setCounter]= useState(0);
    return(
        <View> 
            <Button title="Increase" onPress={() => {setCounter(counter+1)}}/>
            <Button title="Decrease"onPress={() => {setCounter(counter-1)}}/>

            <Text> Total count is: {counter}</Text>
        </View>
    )
}