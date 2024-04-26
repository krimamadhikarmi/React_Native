import { Text, View } from "react-native";

export default function Component(){
    const greeting = <Text>I am component</Text>
    return(
      <View>
         {greeting}
      </View>
    )
}