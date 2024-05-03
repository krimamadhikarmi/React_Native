import {View, Text, SectionList} from 'react-native';
export default function SectionScreen() {
  const DATA = [
    {
      title: 'List1',
      data: ['item1', 'item2', 'item3'],
    },
    {
      title: 'List2',
      data: ['item1', 'item2', 'item3'],
    },
    {
      title: 'List3',
      data: ['item1', 'item2', 'item3'],
    },
  ];

  return (
    <View>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={DATA}
        renderItem={({item}) => (
          <View>
            <Text style={{color: 'black'}}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}})=>(
            <Text style={{fontSize:24}}>{title}</Text>
        )}
      />
    </View>
  );
}
