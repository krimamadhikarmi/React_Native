import { Image, View, Text } from "react-native";

export default function ImageDetail(props){
    return(
        <View>
            <Text>{props.title}</Text>
           <Image source={props.Imagesource}/>
           
        </View>
    )
}