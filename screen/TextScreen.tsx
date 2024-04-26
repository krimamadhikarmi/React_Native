import { useState } from 'react';
import {Text, TextInput, View} from 'react-native';

export function TextScreen() {
 const[name,setName]=useState('')
 const[password,setPassword]=useState('')
  return (
    <View>
      <TextInput style={{margin: 15, borderColor: 'gray', borderWidth: 1}} 
      value={name}
      onChangeText={(newName)=>setName(newName)
      
      }
      />
      <Text style={{margin:10,fontSize:20}}>I am {name}</Text>


      <TextInput  style={{margin: 15, borderColor: 'gray', borderWidth: 1}} 
      value={password}
      onChangeText={(newPassword)=>setPassword(newPassword)}
     
      />
       {password.length < 4 ? <Text>Password should be greater than 4 characters</Text>:null }
    </View>

  );
}
