import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon, Avatar, Badge } from '@rneui/themed';
import Instaavatar from '../../component/instaavatar';
import Icontext from '../../component/icontext';
import Icontext2 from '../../component/icontext2';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal:"0%",
    
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    paddingLeft: 20,
    fontSize: 18,
    height: 44,
    marginVertical:15
  },
   badgeContainer: {
    position: 'absolute',
    top: 0,
    right: 50,
    width: 10, 
    height: 10,
    marginTop:0

  },
});

export default function Notification() {
  return (
    <View style={styles.container}>
    <SectionList
      sections={[
        { data: [<Icontext></Icontext>]},
        {
          title: '7 derniers jours',
          data: [
            <Icontext></Icontext>,
            <Icontext2></Icontext2>,
            <Icontext></Icontext>,
            <Icontext></Icontext>,
            <Icontext2></Icontext2>,
            <Icontext></Icontext>,
            <Icontext2></Icontext2>,
            <Icontext></Icontext>,
          ],
        },
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
      keyExtractor={item => `basicListEntry-${item}`}
    />
    </View>
  )
}

 
