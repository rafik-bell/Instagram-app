import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Groupimg from '../component/groupimg'
import Groupimg1 from '../component/groupimg1'
import Groupimg2 from '../component/groupimg2'
import Serch from '../component/serch'

export default function Search() {
  return (
    <View>
      <ScrollView>
        <Serch></Serch>
        <Groupimg></Groupimg>
        <Groupimg1></Groupimg1>
        <Groupimg2></Groupimg2>
        </ScrollView>
    </View>
  )
}