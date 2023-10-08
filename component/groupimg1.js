import React from 'react'
import { FlatList, View ,StyleSheet, Image} from 'react-native'
const imageListData = [
    { id: '1', source: require('../image/photo4.jpg') },
    { id: '2', source: require('../image/photo4.jpg') },
    { id: '3', source: require('../image/photo4.jpg') },
   { id: '4', source: require('../image/photo4.jpg') },
    
    
    // Add more images to the list as needed
  ];
  const imageListData1 = [
    
    { id: '5', source: require('../image/photo4.jpg') },
    
    // Add more images to the list as needed
  ];

export default function Groupimg1() {
    const renderImageItem = ({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item.source} style={styles.image} />
        </View>
      );
      const renderImageItem1 = ({ item }) => (
        <View style={styles.imageContainer1}>
          <Image source={item.source} style={styles.image1} />
        </View>
      );
  return (
    <View  style={styles.contuner}>
    <FlatList
      data={imageListData}
      renderItem={renderImageItem}
      keyExtractor={(item) => item.id}
      numColumns={2} // Set the number of columns in the grid
    />
    <FlatList
      data={imageListData1}
      renderItem={renderImageItem1}
      keyExtractor={(item) => item.id}
      numColumns={2} // Set the number of columns in the grid
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
      imageContainer1:{
        width:131,
        height:262,
        borderWidth:3,
        borderColor:"white",
        overflow:"hidden"
        
      },
      image1:{
        width:200,
        height:400,
        
      },
      contuner:{
        flexDirection:"row"
      }
    
});