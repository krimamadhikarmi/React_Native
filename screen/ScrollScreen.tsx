import { useState } from 'react';
import {ScrollView, View, Text, RefreshControl} from 'react-native';

export default function ScrollScreen() {
  const [refreshing,setRefreshing]=useState(false);

  const onRefresh=()=>{
    setRefreshing(true);
    setTimeout(()=>{
        setRefreshing(false)
    },1000)
  }


  return (
    <View>
      <ScrollView style={{backgroundColor: 'plum', marginHorizontal: 20}}>   
        <Text style={{fontSize:20}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exerc itation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          
        </Text>
      
      </ScrollView>
    </View>
  );
}
