import {Button, View,Text} from "react-native";
export function Counter({color,onIncrease,onDecrease}){
    return(
        <View>
            <Text>For {color}</Text>
            <Button title={`Increase ${color}`} onPress={()=>onIncrease()}/>
            <Button title={`Decrease ${color}`} onPress={()=>onDecrease()}/>
        </View>
    )
}