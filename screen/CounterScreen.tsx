import { useState } from "react";
import { Button, View, Text, TouchableWithoutFeedback } from "react-native";

export default function CounterScreen(){
    const [counter,setCounter]= useState(0);

    const press=()=>{
        setCounter(counter+1)
    }
       
    
    return(
        // <View> 
        //     <Button title="Increase" onPress={() => {setCounter(counter+1)}}/>
        //     <Button title="Decrease"onPress={() => {setCounter(counter-1)}}/>

        //     <Text> Total count is: {counter}</Text>
        // </View>

        <View>
            <Text>Count:{counter}</Text>
            <TouchableWithoutFeedback onPress={press}>
                <Text>Click to Count</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}