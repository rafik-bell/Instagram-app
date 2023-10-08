import React, { useState } from 'react';
import { View, FlatList, Text ,StyleSheet} from 'react-native'
import { SearchBar } from '@rneui/themed';

export default function Serch() {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([
     
    ]);
  
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  return (
    <View>
       <SearchBar
        placeholder="Search..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        containerStyle={{
            backgroundColor:"white",
            margin:10,
            padding:0,
            borderWidth:0
        }}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
    
  )
}
const styles = StyleSheet.create({
    
    
});