import {View, Text, ScrollView} from 'react-native';
import ImageDetail from '../components/ImageDetail';

export default function ImageScreen() {
  return (
    <ScrollView>
      <Text>I am ImageScreen</Text>
      <ImageDetail
        style={{width: '5%'}}
        title={'Land'}
        Imagesource={require('../assets/land.jpg')}
      />
      <ImageDetail title={'Sea'} Imagesource={require('../assets/sea.jpg')} />
    </ScrollView>
  );
}
