import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function HomeScreen() {
  return (
    <SafeAreaView style={{padding:2}}>
        <Text style={{fontSize:30, fomtFamily:"outfit-bold"}}> Jobify  </Text>
    </SafeAreaView>
  )
}

export default HomeScreen