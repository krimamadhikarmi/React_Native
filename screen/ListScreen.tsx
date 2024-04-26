import {Button, FlatList, Text, View} from 'react-native';

export default function List() {
  const friends = [
    {name: 'Friend1', Age: 21},
    {name: 'Friend2', Age: 20},
    {name: 'Friend3', Age: 22},
    {name: 'Friend4', Age: 21},
    {name: 'Friend5', Age: 20},
  ];
  return (
    <View>
      <FlatList
        keyExtractor={f => f.name}
        data={friends}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
