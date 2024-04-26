import {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
export default function ColorScreen() {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button title="Add Color" onPress={() => setColors([...colors, randomRgb()])} />

      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor:item,
                width: 100,
                height: 100,
                marginTop:10,
                marginLeft:10
              }}/>
          );
        }}
      />
    </View>
  );          
}

function randomRgb() {
  red = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}
