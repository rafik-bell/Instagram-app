import React from 'react'
import { FlatList, View ,StyleSheet, Image} from 'react-native'
const imageListData = [
    { id: '1', source: require('../image/photo4.jpg') },
    { id: '2', source: require('../image/photo4.jpg') },
    { id: '3', source: require('../image/photo4.jpg') },
   { id: '4', source: require('../image/photo4.jpg') },
    { id: '5', source: require('../image/photo4.jpg') },
    { id: '6', source: require('../image/photo4.jpg') },
    // Add more images to the list as needed
  ];

export default function Groupimg() {
    const renderImageItem = ({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item.source} style={styles.image} />
        </View>
      );
  return (
    <View >
    <FlatList
      data={imageListData}
      renderItem={renderImageItem}
      keyExtractor={(item) => item.id}
      numColumns={3} // Set the number of columns in the grid
    />
  </View>
  )
}
const styles = StyleSheet.create({
    
    imageContainer:{
        width:131,
        height:131,
        borderWidth:3,
        borderColor:"white",
        overflow:"hidden"
        
      },
      image:{
        width:200,
        height:200,
        
      },
    
});