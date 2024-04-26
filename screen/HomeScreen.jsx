import { Button, View } from "react-native"
export default function Home({navigation}){
    return(
        <View> 
            <Button title="Go to List" onPress={() => {navigation.navigate('List')} } />
            <Button title="Go to Component" onPress={() => {navigation.navigate('Component')} }/>
            <Button title="Go to Image" onPress={() => {navigation.navigate('Image')} }/>
            <Button title="Counter" onPress={() => {navigation.navigate('Counter')} }/>
            <Button title="Color" onPress={() => {navigation.navigate('ColorScreen')} }/>
            <Button title="Square" onPress={() => {navigation.navigate('SquareScreen')} }/>
            <Button title="Text Screen" onPress={() => {navigation.navigate('TextScreen')} }/>
        </View>
        
    )
}